import React from "react";
import { useEmployeeContext } from "../utils/GlobalState";
// import desc from "../images/desc.svg";
import friend1 from "../images/friends/friend1.jpg";
import friend2 from "../images/friends/friend2.jpg";

let sortToggle = {
  id: {
    active: false,
    direction: "asc"
  },
  firstName: {
    active: false,
    direction: "asc"
  },
  lastName: {
    active: false,
    direction: "asc"
  },
  phoneNumber: {
    active: false,
    direction: "asc"
  },
  department: {
    active: false,
    direction: "asc"
  }

}


function EmployeeList() {
  const [state, dispatch] = useEmployeeContext();

  const styles = {
    unsorted: {
    },
    asc: {
      color: "#ffffff",
      backgroundColor: "#00bb00"
    },
    desc: {
    
    }
  }

  function sort(e, term) {
    e.preventDefault();
    e.stopPropagation();

    if (sortToggle[term].active) {
      // if this sort term is already active
      // then just change the direction.
      sortToggle[term].direction = sortToggle[term].direction === "asc" ? "desc" : "asc";
    } else {
      // otherwise set it to active, set the others to inactive and set the direction to ascending
      for (var property in sortToggle) {
        if (sortToggle.hasOwnProperty(property)) {
          // Set the others back to normal
          sortToggle[property].active = false;
          sortToggle[property].direction = "asc";
        }
      }

      sortToggle[term].active = true;
      sortToggle[term].direction = "asc";
    }
    console.log(sortToggle);


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


            <td></td>
            <td 

            
            className={
              !sortToggle.id.active ? "" :
              (sortToggle.id.active &&
              (sortToggle.id.direction === "desc")) ?
                  "desc" : "asc"

            } 
          
          onClick={(e) => sort(e, "id")} >
              ID#
                </td>

            <td className={
              !sortToggle.firstName.active ? "" :
              (sortToggle.firstName.active &&
              (sortToggle.firstName.direction === "desc")) ?
                  "desc" : "asc"
            }
              onClick={(e) => sort(e, "firstName")}>First Name</td>

            <td
              className={
              !sortToggle.lastName.active ? "" :
              (sortToggle.lastName.active &&
                (sortToggle.lastName.direction === "desc")) ?
                    "desc" : "asc"
              }
              onClick={(e) => sort(e, "lastName")}>Last Name</td>
            <td className={
                !sortToggle.phoneNumber.active ? "" :
                (sortToggle.phoneNumber.active &&
                (sortToggle.phoneNumber.direction === "desc")) ?
                    "desc" : "asc"
            }
              onClick={(e) => sort(e, "phoneNumber")}>Phone </td>
            <td className={
                !sortToggle.department.active ? "" :
                (sortToggle.department.active &&
                (sortToggle.department.direction === "desc")) ?
                    "desc" : "asc"
            }
              onClick={(e) => sort(e, "department")}>Department</td>
          </tr>
        </thead>
        <tbody>
          {/* key={item.id} */}
          {state.Employees.map((item, index) => (
            <tr className="listRow" key={index}>
              <td className="listCell avatarContainer" key='0'>
                <img src={process.env.PUBLIC_URL + '/images/friends/' + item.image + '.jpg'}  className="avatar" />  
                 {/* {item.image}  */}
              </td>
              <td className="listCell" key='1'>
                {item.id}
              </td>

              <td className="listCell" key='2'>
                {item.firstName}
              </td>
              <td className="listCell" key='3'>
                {item.lastName}
              </td>
              <td className="listCell" key='4'>
                {item.phoneNumber}
              </td>
              <td className="listCell" key='5'>
                {item.department}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;


