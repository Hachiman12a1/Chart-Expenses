import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import { PropTypes } from "prop-types";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

Expenses.propTypes = {
  items: PropTypes.array,
};

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const { items = [] } = props;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
