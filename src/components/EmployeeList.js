import React from "react";
import { useEmployeeContext } from "../utils/GlobalState";

function EmployeeList() {
  const [state, dispatch] = useEmployeeContext();

  return (
    <div>
      <h4>Employee List:</h4>
      <h2>Filtering by: {state.CurrentFilter}</h2>
      <table className="listTable">
      <thead>
              <tr className="headerRow">
                <td >ID #</td>
                <td >First Name</td>
                <td>Last Name</td>
                <td>Phone </td>
                <td>Department</td>
              </tr>
          </thead>
          <tbody>
          {/* key={item.id} */}
        {state.Employees.map((item, index) => (
              <tr className="listRow">
              <td className="listCell">
              { item.id}
              </td>
              <td className="listCell">
              { item.firstName}
              </td>
              <td className="listCell">
              { item.lastName}
              </td>
              <td className="listCell">
              { item.phoneNumber}
              </td>
              <td className="listCell">
              { item.department}
              </td>
              </tr>
        ))}
            </tbody>
      </table>
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