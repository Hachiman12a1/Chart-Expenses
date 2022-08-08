import React from "react";
import PropTypes from "prop-types";

ExpenseItem.propTypes = {};

function ExpenseItem(props) {
  return (
    <div>
      <div>August 06th 2022</div>
      <div>
        <h2>Car Insurance</h2>
        <div>$294.67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
