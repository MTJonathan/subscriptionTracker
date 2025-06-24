import { useState } from "react";
import AddBudget from "./components/AddBudget";
import AddSubscription from "./components/addSubscription/AddSubscription";
import "./App.css";

function App() {
  const [budget, setBudget] = useState(0);
  const [spentBudget, setSpentBudget] = useState(0);
  const [availableBudget, setAvailableBudget] = useState(0);
  const [budgetOrSubscription, setBudgetOrSubscription] = useState(false);

  const handleClose = () => {
    setBudget(0);
    setSpentBudget(0);
    setAvailableBudget(0);
    setBudgetOrSubscription(false);
  };

  return (
    <main className="mainContainer">
      <section style={{padding: budgetOrSubscription ? "20px 0px" : "20px 80px"}} className="container">
        <header>
          <h1>Subscriptions Tracker</h1>
          {budgetOrSubscription && (
            <button onClick={handleClose}>Cerrar</button>
          )}
        </header>
        {budgetOrSubscription ? (
          <AddSubscription
            budget={budget}
            spentBudget={spentBudget}
            availableBudget={availableBudget}
            setBudget={setBudget}
            setSpentBudget={setSpentBudget}
            setAvailableBudget={setAvailableBudget}
          />
        ) : (
          <AddBudget
            setBudget={setBudget}
            budget={budget}
            setBudgetOrSubscription={setBudgetOrSubscription}
            setAvailableBudget={setAvailableBudget}
          />
        )}
      </section>
    </main>
  );
}

export default App;
