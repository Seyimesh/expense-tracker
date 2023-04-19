import React, {useState} from 'react';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from "./component/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)car insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
];

function App() {
  const [expenses, setExpenses] =useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {    
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    }); 
  };

  // here, we intend to set our expense array to new array which include the new expense:line35
  

  // return React.createElement('div', {}, React.createElement('h2', {}, "Let's get started"), React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
