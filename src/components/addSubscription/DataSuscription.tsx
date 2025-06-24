import type { DataSuscriptionProps } from "../../lib/type";
const DataSuscription = ({
  budget,
  spentBudget,
  availableBudget, 
}: DataSuscriptionProps) => {
  return (
    <div>
      <p><span>Presupuesto:</span> $ {budget}</p>
      <p><span>Disponible:</span> $ {availableBudget}</p>
      <p><span>Gastado:</span> $ {spentBudget}</p>
    </div>
  );
};

export default DataSuscription;
