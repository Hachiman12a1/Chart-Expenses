import React from "react";
import PropTypes from "prop-types";
import './ExpenseItem.css'

ExpenseItem.propTypes = {};

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>August 06th 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
