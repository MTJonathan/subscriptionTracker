import type { FormSubscriptionProps } from "../../lib/type";
import { useEffect } from "react";

const formSubscription = ({
  budget,
  spentBudget,
  availableBudget,
  setSpentBudget,
  setAvailableBudget,
  price,
  service,
  setService,
  setPrice,
  subscriptions,
  setSubscriptions,
  editIndex,
  setEditIndex,
  budgetOrSubscription,
}: FormSubscriptionProps) => {

  //Guardar en localStorage
  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions))
    localStorage.setItem("budget", JSON.stringify(budget))
    localStorage.setItem("spentBudget", JSON.stringify(spentBudget))
    localStorage.setItem("availableBudget", JSON.stringify(availableBudget))
    localStorage.setItem("editIndex", JSON.stringify(editIndex))
    localStorage.setItem("service", JSON.stringify(service))
    localStorage.setItem("price", JSON.stringify(price))
    localStorage.setItem("budgetOrSubscription", JSON.stringify(budgetOrSubscription))
  }, [subscriptions, budget, spentBudget, availableBudget, editIndex, service, price, budgetOrSubscription]);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const imgService = `/img/${service}.png`;

    if (price && availableBudget >= price) {
      const newSubscription = {
        img: imgService,
        price: price.toFixed(2),
        service:service,
      };
      console.log(newSubscription);

      if (editIndex !== null) {
        const updatedSubscriptions = subscriptions.map((subscription, index) => {
          if (index === editIndex) {
            return newSubscription;
          }
          return subscription;
        });
        setSubscriptions(updatedSubscriptions);
        setEditIndex(null);
      } else {
        setSpentBudget(spentBudget + price);
        setAvailableBudget(availableBudget - price);
        setSubscriptions([
          ...subscriptions,
          newSubscription,
        ]);
      }
    }else{
      alert("No tienes dinero suficiente")
    }
    setService("");
    setPrice(0);
    setEditIndex(null);
  };
  return (
    <form className="formSubscription" onSubmit={handleSubmit}>
      <h3>{editIndex !== null ? "Editar Suscripción" : "Agregar Suscripción"}</h3>
      <label htmlFor="service">Servicio</label>
      <select
        name="service"
        id="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
      >
        <option value="" selected disabled>
          ---ELEGIR---
        </option>
        <option value="netflix">Netflix</option>
        <option value="disneyPlus">Disney+</option>
        <option value="hboMax">HBO Max</option>
        <option value="apletv">Apple TV+</option>
        <option value="spotify">Spotify</option>
        <option value="primeVideo">Prime Video</option>
        <option value="starPlus">Star Plus</option>
      </select>

      <label htmlFor="price">Precio</label>
      <input
        type="number"
        name="price"
        id="price"
        min={0}
        step={"any"}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="$20"
        required
      />
      <button type="submit">{editIndex !== null ? "Editar" : "Agregar"}</button>
    </form>
  );
};

export default formSubscription;
