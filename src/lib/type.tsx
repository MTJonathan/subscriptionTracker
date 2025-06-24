export interface DataSuscriptionProps {
 budget: number;
 spentBudget: number;
 availableBudget: number;
 setBudget: React.Dispatch<React.SetStateAction<number>>;
 setSpentBudget: React.Dispatch<React.SetStateAction<number>>;
 setAvailableBudget: React.Dispatch<React.SetStateAction<number>>;
}
export interface FormSubscriptionProps {
  spentBudget: number;
  availableBudget: number;
  price: number | undefined;
  service: string;
  subscriptions: {img:string, price:string}[];
  setService: React.Dispatch<React.SetStateAction<string>>;
  setPrice: React.Dispatch<React.SetStateAction<number | undefined>>;
  setSpentBudget: React.Dispatch<React.SetStateAction<number>>;
  setAvailableBudget: React.Dispatch<React.SetStateAction<number>>;
  setSubscriptions: React.Dispatch<React.SetStateAction<{img:string, price:string}[]>>;
}