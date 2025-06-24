export interface DataSuscriptionProps {
 budget: number;
 spentBudget: number;
 availableBudget: number;
 setBudget: React.Dispatch<React.SetStateAction<number>>;
 setSpentBudget: React.Dispatch<React.SetStateAction<number>>;
 setAvailableBudget: React.Dispatch<React.SetStateAction<number>>;
}