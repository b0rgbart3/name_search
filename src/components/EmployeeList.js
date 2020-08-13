import React from "react";
import { useEmployeeContext } from "../utils/GlobalState";

function EmployeeList() {
  const [state, dispatch] = useEmployeeContext();

  return (
    <div>
      <h4>Employee List:</h4>
      <ul className="list-group">
        {state.map((item, index) => (
          <li className="list-group-item col-12" key={item.id}>
           { item.firstName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;



// <ul className="list-group">
// {state.map((item, index) => (
//   <li className="list-group-item col-12" key={item.id}>
//     xxxx
//     {/* <button
//       className="btn btn-warning mr-4"
//       onClick={() => dispatch({ type: "prioritize", index })}
//     >
//       Prioritize
//     </button>
//     <button
//       className="btn btn-danger mr-4"
//       onClick={() => dispatch({ type: "remove", index })}
//     >
//       X Remove
//     </button> */}
//     {/* {index}:<span className={item.priority ? "font-weight-bold" : ""}> {item.name}</span> */}
//   </li>
// ))}
// </ul>