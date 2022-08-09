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
  const [filteredYear, setFilteredYear] = useState('2020');
  const { items = [] } = props;

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selectedYear = {filteredYear} onChangeFilter={filterChangeHandler}/>

        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        />
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        />
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        />
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        />
      </Card>
    </div>
  );
}

export default Expenses;
