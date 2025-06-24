import type { FormSubscriptionProps } from "../../lib/type";

const formSubscription = ({
  spentBudget,
  availableBudget,
  setSpentBudget,
  setAvailableBudget,
  price,
  service,
  setService,
  setPrice,
}: FormSubscriptionProps) => {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(price){
      setSpentBudget(spentBudget + price);
      setAvailableBudget(availableBudget - price);
    }
  }
  return (
    <form className="formSubscription" onSubmit={handleSubmit}>
      <h3>Agregar Suscripción</h3>
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
        <option value="disney+">Disney+</option>
        <option value="spotify">Spotify</option>
        <option value="amazon prime">Amazon Prime</option>
      </select>

      <label htmlFor="price">Precio</label>
      <input
        type="number"
        name="price"
        id="price"
        min={0}
        step={'any'}
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
        placeholder="$20"
        required
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default formSubscription;
