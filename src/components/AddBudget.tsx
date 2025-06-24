interface AddBudgetProps {
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  setBudgetOrSubscription: React.Dispatch<React.SetStateAction<boolean>>;
  setAvailableBudget: React.Dispatch<React.SetStateAction<number>>;
  budget: number;
}
const AddBudget = ({ budget, setBudget, setBudgetOrSubscription, setAvailableBudget }: AddBudgetProps) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBudgetOrSubscription(true);
    setAvailableBudget(budget)
  };
  return (
    <div>
      <h2>Agregar Presupuesto</h2>
      <form onSubmit={handleSubmit} className="formAddBudget">
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
          placeholder="Ingrese su presupuesto"
        />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddBudget;
