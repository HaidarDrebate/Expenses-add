import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = (expenseDate) => {
    const month = expenseDate.date.toLocaleString('en-US', { month: 'long' });
    const day = expenseDate.date.toLocaleString('en-US', { day: '2-digit' });
    const year = expenseDate.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}

export default ExpenseDate;