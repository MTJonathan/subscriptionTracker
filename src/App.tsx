import { useState } from "react";
import AddBudget from "./components/AddBudget";
import AddSubscription from "./components/addSubscription/AddSubscription";
import "./App.css";

function App() {
  const [budget, setBudget] = useState(0);
  const [spentBudget, setSpentBudget] = useState(0);
  const [availableBudget, setAvailableBudget] = useState(0);
  const [budgetOrSubscription, setBudgetOrSubscription] = useState(false);

  return (
    <main className="mainContainer">
      <section className="container">
        <header>
          <h1>Subscriptions Tracker</h1>
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
