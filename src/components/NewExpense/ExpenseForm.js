import React, {useState}from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // 2. Multiple data
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) => {

        // 1. Single data
        setEnteredTitle(event.target.value)

        // 2. Multiple data
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });

        // 3.Latest data
        // setUserInput((prevState)=> {
        //     return { ...prevState, enteredTitle: event.target.value};
        // })


    };

    const amountChangeHandler = (event) => {    

        // 1. Single data
        setEnteredAmount(event.target.value);

        // 2. Multiple data
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // });
    }

    const dateChangeHandler = (event) => {

        // 1. Single data
        setEnteredDate(event.target.value);

        // 2. Multiple data
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // });
    }
    
    //Alternative: Creating a shared handler function
    const inputChangeHandler = (identifier, value) => {
        if(identifier === 'title'){
            setEnteredTitle(value)
        }else if(identifier === 'date'){
            setEnteredDate(value)
        }else {
            setEnteredAmount(value)
        }
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);

        setEnteredAmount('');
        setEnteredTitle('');
        setEnteredDate('');

    }

    const [showForm, setShowForm] = useState(false);

    return <form onSubmit={submitHandler}>
            <div>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2023-07-23" max="2024-07-23" onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
    </form>
};

export default ExpenseForm;