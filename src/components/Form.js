import React, { useRef } from "react";
import { useEmployeeContext } from "../utils/GlobalState";

function Form() {
  const inputRef = useRef();
  const [_, dispatch] = useEmployeeContext();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "search",
      term: inputRef.current.value
    });
    inputRef.current.value = "";
  }

  function clearFilter(e) {
    e.preventDefault();

    dispatch({
      type: "clear",
      term: ""
    });
    inputRef.current.value = "";

  }

  return (
    <div  className="filterForm">
      <div class='filterTitle'>Filter Employee List:</div>
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          ref={inputRef}
          placeholder="Filter the employee list by..."
        />
        <button className="btn btn-primary" type="submit">
         Filter
        </button>
        <button className="btn btn-success" onClick={(e)=>clearFilter(e)}>
         Clear Filter
        </button>
      </form>
    </div>
  );
}

export default Form;
