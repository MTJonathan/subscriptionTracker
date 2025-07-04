export interface DataSuscriptionProps {
 budget: number;
 spentBudget: number;
 availableBudget: number;
 setBudget: React.Dispatch<React.SetStateAction<number>>;
 setSpentBudget: React.Dispatch<React.SetStateAction<number>>;
 setAvailableBudget: React.Dispatch<React.SetStateAction<number>>;
}
export interface FormSubscriptionProps {
  budget: number;
  spentBudget: number;
  availableBudget: number;
  price: number | undefined;
  service: string;
  subscriptions: {img:string, price:string, service:string}[];
  setService: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSpentBudget: React.Dispatch<React.SetStateAction<number>>;
  setAvailableBudget: React.Dispatch<React.SetStateAction<number>>;
  setSubscriptions: React.Dispatch<React.SetStateAction<{img:string, price:string, service:string}[]>>;
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
  budgetOrSubscription: boolean;
}
export interface AddSubscriptionProps{
  budget: number;
  spentBudget: number;
  availableBudget: number;
  setBudget: React.Dispatch<React.SetStateAction<number>>;
  setSpentBudget: React.Dispatch<React.SetStateAction<number>>;
  setAvailableBudget: React.Dispatch<React.SetStateAction<number>>;
  budgetOrSubscription: boolean;
  service: string;
  price: number | undefined;
  subscriptions: {img:string, price:string, service:string}[];
  setService: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSubscriptions: React.Dispatch<React.SetStateAction<{img:string, price:string, service:string}[]>>;
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}