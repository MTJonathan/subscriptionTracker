import DataSuscription from "./DataSuscription";
import FormSubscription from "./FormSubscription";
import type { DataSuscriptionProps } from "../../lib/type";
const AddSubscription = ({
  budget,
  spentBudget,
  availableBudget,
  setBudget,
  setSpentBudget,
  setAvailableBudget,
}: DataSuscriptionProps) => {
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
        budget={budget}
        spentBudget={spentBudget}
        availableBudget={availableBudget}
        setBudget={setBudget}
        setSpentBudget={setSpentBudget}
        setAvailableBudget={setAvailableBudget}
      />
      </section>
      <section className="containerSuscriptions">
        <h2>Suscripciones</h2>

      </section>
    </div>
  );
};

export default AddSubscription;
