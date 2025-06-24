import DataSuscription from "./DataSuscription";
import FormSubscription from "./FormSubscription";
import type { DataSuscriptionProps } from "../../lib/type";
import { useState } from "react";
const AddSubscription = ({
  budget,
  spentBudget,
  availableBudget,
  setBudget,
  setSpentBudget,
  setAvailableBudget,
}: DataSuscriptionProps) => {
  const [service, setService] = useState<string>("");
  const [price, setPrice] = useState<number | undefined>(undefined);
  const [subscriptions, setSubscriptions] = useState<
    { img: string; price: string; service: string }[]
  >([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleDelete = (index: number) => {
    if (confirm("¿Estas seguro de eliminar esta suscripción?")) {
      const newSubscriptions = [...subscriptions];
      newSubscriptions.splice(index, 1);
      setSubscriptions(newSubscriptions);
    }
  };

  const handleEdit = (index: number) => {
    const subscription = subscriptions[index];

    // Cargar en los inputs
    console.log(subscription);

    setService(subscription.service);
    setPrice(Number(subscription.price));
    setEditIndex(index);
  };
  return (
    <div>
      <section className="containerDataSuscription">
        <DataSuscription
          budget={budget}
          spentBudget={spentBudget}
          availableBudget={availableBudget}
          setBudget={setBudget}
          setSpentBudget={setSpentBudget}
          setAvailableBudget={setAvailableBudget}
        />
        <FormSubscription
          spentBudget={spentBudget}
          availableBudget={availableBudget}
          setSpentBudget={setSpentBudget}
          setAvailableBudget={setAvailableBudget}
          price={price}
          service={service}
          setService={setService}
          setPrice={setPrice}
          setSubscriptions={setSubscriptions}
          subscriptions={subscriptions}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
      </section>
      <section className="containerSuscriptions">
        <header>
          <h2>Suscripciones</h2>
        </header>

        <div className="containerlistSuscriptions">
          {subscriptions.map((subscription, index) => (
            <div className="listSuscription" key={index}>
              <picture>
                <img src={subscription.img} />
              </picture>
              <div>
                <p>Precio: ${subscription.price}</p>
              </div>
              <div className="buttons">
                <button onClick={() => handleDelete(index)}>Eliminar</button>
                <button onClick={() => handleEdit(index)}>Editar</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AddSubscription;
