
import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      date: new Date(2023, 6, 13),
      title: 'Food',
      amount: 2345
    },
    {
      id: 'e2',
      date: new Date(2021, 6, 13),
      title: 'Car Insurance',
      amount: 2345
    },
    {
      id: 'e3',
      date: new Date(2022, 6, 13),
      title: 'Toilet paper',
      amount: 2345
    },
    {
      id: 'e3',
      date: new Date(2021, 6, 13),
      title: 'Toilet paper',
      amount: 2345
    }
  ];

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
