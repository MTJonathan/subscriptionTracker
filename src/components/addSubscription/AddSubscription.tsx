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
    { img: string; price: string }[]
  >([]);
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
                <p>Precio: {subscription.price}</p>
              </div>
              <div className="buttons">
                <button>Eliminar</button>
                <button>Editar</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AddSubscription;
