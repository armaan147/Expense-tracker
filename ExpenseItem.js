import React from 'react';

function ExpenseItem({ expense, onDelete }) {
  return (
    <li>
      {expense.category}: ₹{expense.amount.toFixed(2)}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}

export default ExpenseItem;