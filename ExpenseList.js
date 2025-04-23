import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          expense={expense}
          onDelete={() => onDeleteExpense(expense.id)}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;