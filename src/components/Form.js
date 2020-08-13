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

  return (
    <div>
      <h1>Search Employee List:</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Filter the employee list by..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
         Search
        </button>
      </form>
    </div>
  );
}

export default Form;
