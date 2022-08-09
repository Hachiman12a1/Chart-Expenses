import React from "react";
import "./ExpenseForm.css";

ExpenseForm.propTypes = {};

function ExpenseForm(props) {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" min="2019-01-01" step="2023-12-31" />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
