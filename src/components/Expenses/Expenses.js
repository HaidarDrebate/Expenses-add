import React, { useState } from 'react';
import Card from '../UI/Card.js';
import './Expenses.css';
import ExpensesList from './ExpensesList.js';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart.js'

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;