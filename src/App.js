import ExpenseItem from "./components/ExpenseItem";


function App() {

  const expenses = [
    {
      id: 'e1',
      date: new Date(2023, 6, 13),
      title: 'Food',
      amount: 2345
    },
    {
      id: 'e2',
      date: new Date(2023, 6, 13),
      title: 'Car Insurance',
      amount: 2345
    },
    {
      id: 'e3',
      date: new Date(2023, 6, 13),
      title: 'Toilet paper',
      amount: 2345
    }
  ]
  return (
    <div>
      <h2>Lets get started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date.toDateString}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date.toDateString}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date.toDateString}></ExpenseItem>
    </div>
  );
}

export default App;
