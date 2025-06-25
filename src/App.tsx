import { useState } from "react";
import AddBudget from "./components/AddBudget";
import AddSubscription from "./components/addSubscription/AddSubscription";
import "./App.css";

function App() {
  const [budget, setBudget] = useState(()=>Number(localStorage.getItem("budget")) || 0);
  const [spentBudget, setSpentBudget] = useState(()=>Number(localStorage.getItem("spentBudget")) || 0);
  const [availableBudget, setAvailableBudget] = useState(()=>Number(localStorage.getItem("availableBudget")) || 0);
  const [budgetOrSubscription, setBudgetOrSubscription] = useState(Boolean(localStorage.getItem("budgetOrSubscription")) || false);

  const [service, setService] = useState<string>(()=>localStorage.getItem("service") || "");
  const [price, setPrice] = useState<number | undefined>(()=>Number(localStorage.getItem("price")) || undefined);
  const [subscriptions, setSubscriptions] = useState<
    { img: string; price: string; service: string }[]>
    (()=>JSON.parse(localStorage.getItem("subscriptions") || "[]"));
  const [editIndex, setEditIndex] = useState<number | null>(()=>Number(localStorage.getItem("editIndex")) || null);

  const handleClose = () => {
    setBudget(0);
    setSpentBudget(0);
    setAvailableBudget(0);
    setBudgetOrSubscription(false);
    setService("");
    setPrice(undefined);
    setSubscriptions([]);
    setEditIndex(null);
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
            budgetOrSubscription={budgetOrSubscription}
            service={service}
            price={price}
            subscriptions={subscriptions}
            setService={setService}
            setPrice={setPrice}
            setSubscriptions={setSubscriptions}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
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
