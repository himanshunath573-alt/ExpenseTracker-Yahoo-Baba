
import { useState , useEffect} from 'react'
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './App.css'

function App() {
		const [expense , setExpense] = useState([])

	const addExpense = (expense) => {

	}

	const deleteExpense = (id) => {
		
	}

  return (
      
      	<div class="app-container">
		<h1>💰 Expense Tracker</h1>
		<ExpenseForm/>
		<h3 class="total">Total Expense: ₹750.00</h3>
		<ExpenseList/>
	</div>
  )
}

export default App;
