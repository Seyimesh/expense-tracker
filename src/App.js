import React from 'react';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from "./component/Expenses/Expenses"

function App() {
  const expenses = [
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

  const addExpenseHandler = expense => {       //
    console.log('In App.js');
    console.log(expense);
  };

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
