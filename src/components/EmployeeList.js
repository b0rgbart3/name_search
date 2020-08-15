import React from "react";
import { useEmployeeContext } from "../utils/GlobalState";

let myCurrentSort = "";
let mySortDirection = "asc";

let styleToggle = {
  id: false,
  firstName: false,
  lastName: false,
  phoneNumber: false,
  department: false
}

function EmployeeList() {
  const [state, dispatch] = useEmployeeContext();

  const styles = {
    asc: {
  
    },
    desc: {
      backgroundImage: "url(images/desc.svg)",
    }
}

  function sort(e, term) {
    e.preventDefault();
    e.stopPropagation();

    myCurrentSort = term;
    mySortDirection = mySortDirection==="asc"? "desc" : "asc";

    console.log("-------------");
    dispatch({
      type: "sort",
      term: term
    });

    // console.log("CurrentSort: " + state.CurrentSort);
    console.log("My Current Sort: " + myCurrentSort);
    // console.log("SortDirection: " + state.SortDirection);
    console.log("My Sort Direction: " + mySortDirection);
    styleToggle = {
      id: false,
      firstName: false,
      lastName: false,
      phoneNumber: false,
      department: false
    }

    if (myCurrentSort === state.CurrentSort) {
    switch(myCurrentSort) {
      case "id":
        if (mySortDirection === "asc")
        {
        styleToggle.id = true;
        } else {
          styleToggle.id = false;
        }
        break;
      case "firstName":
        if (mySortDirection === "asc")
        {
        styleToggle.firstName = true;
        }else {
          styleToggle.firstName = false;
        }
        break;
      case "lastName":
        if (mySortDirection === "asc")
        {
        styleToggle.lastName = true;
        }
        break;
      case "phoneNumber":
        if (mySortDirection === "asc")
        {
        styleToggle.phoneNumber = true;
        }
        break;
      case "department":
        if (mySortDirection === "asc")
        {
        styleToggle.department = true;
        }
        break;
      default:
        break;
    }
    }
    console.log(styleToggle);
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
                
                <td style={styleToggle.id ? styles.desc: styles.asc } onClick={ (e) => sort(e, "id")} >
                  ID#
                </td>
                <td style={styleToggle.firstName ? styles.desc: styles.asc } 
                 onClick={ (e) => sort(e, "firstName")}>First Name</td>
                <td style={styleToggle.lastName? styles.desc: styles.asc } 
                 onClick={ (e) => sort(e, "lastName")}>Last Name</td>
                <td style={styleToggle.phoneNumber ? styles.desc: styles.asc } 
                 onClick={ (e) => sort(e, "phoneNumber")}>Phone </td>
                <td style={styleToggle.department ? styles.desc: styles.asc } 
                 onClick={ (e) => sort(e, "department")}>Department</td>
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


