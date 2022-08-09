import React from "react";
import PropTypes from "prop-types";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

ExpenseItem.propTypes = {};

function ExpenseItem(props) {
  const clickHandler =  () => {
    console.log('Clicked');
  }  
  return (
    <Card className="expense-item">
      <ExpenseDate date = {props.date}/>

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick = {clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
