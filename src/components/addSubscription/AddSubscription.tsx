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
      />
      </section>
      <section className="containerSuscriptions">
        <h2>Suscripciones</h2>

      </section>
    </div>
  );
};

export default AddSubscription;
