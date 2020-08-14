import React from "react";
import { useEmployeeContext } from "../utils/GlobalState";

function EmployeeList() {
  const [state, dispatch] = useEmployeeContext();

  function sort(e, term) {
    e.preventDefault();
    e.stopPropagation();
    console.log("-------------");
    dispatch({
      type: "sort",
      term: term
    });

  }
  return (
    <div>
      <div className='listTitle'>Employee List:</div>
      {state.CurrentFilter ? 
      <div classNames='listSubTitle'>Filtering by: {state.CurrentFilter}</div>
      : <div className='listSubTitle'></div>}
      <table className="listTable">
      <thead>
              <tr className="headerRow">
                
                <td className={state.sortDirection === "asc" ? "asc" : "desc"} onClick={ (e) => sort(e, "id")} >ID #</td>
                <td onClick={ (e) => sort(e, "firstName")}>First Name</td>
                <td onClick={ (e) => sort(e, "lastName")}>Last Name</td>
                <td onClick={ (e) => sort(e, "phoneNumber")}>Phone </td>
                <td onClick={ (e) => sort(e, "department")}>Department</td>
              </tr>
          </thead>
          <tbody>
          {/* key={item.id} */}
        {state.Employees.map((item, index) => (
              <tr className="listRow" key={index}>
              <td className="listCell" key='0'>
              { item.id}
              </td>
              <td className="listCell" key='1'>
              { item.firstName}
              </td>
              <td className="listCell" key='2'>
              { item.lastName}
              </td>
              <td className="listCell" key='3'>
              { item.phoneNumber}
              </td>
              <td className="listCell" key='4'>
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


