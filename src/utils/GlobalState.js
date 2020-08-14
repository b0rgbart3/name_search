import React, { createContext, useReducer, useContext } from "react";
import Data from "../data/data.json";

const EmployeeContext = createContext({
  Employees: [ {
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      image: ""}],
  CurrentFilter: "",
  CurrentSort: "",
  SortDirection: ""

});
const { Provider } = EmployeeContext;

function reducer({Employees, CurrentFilter, CurrentSort,SortDirection}, action) {

  console.log("In the reducer.");
  switch (action.type) {
    case "clear":
      return ({Employees: Data, 
               CurrentFilter: "", CurrentSort:"", SortDirection:""});
  case "search":
    // whenever we do a sort, we want to start with the full list.
   
    let filteredEmployeeList  = Employees.filter((item, index) => {
            return item.firstName.includes(action.term) ||
            item.lastName.includes(action.term) ||
            item.phoneNumber.includes(action.term) || 
            item.department.includes(action.term); });
    return ({ Employees: filteredEmployeeList, 
              CurrentFilter: action.term, 
              CurrentSort: "",
              SortDirection: ""});
  case "sort":
    console.log("Before: Direction: " + SortDirection);

    SortDirection === "asc" ? 
    SortDirection = "desc" :
    SortDirection = "asc";

    console.log("After: Direction: " + SortDirection);
    let sortedEmployeeList = [];
    if (SortDirection === "asc") {
      sortedEmployeeList = Employees.sort((a, b) => (a[action.term] > b[action.term]) ? 1 : -1);
    }
    else {
      sortedEmployeeList = Employees.sort((b, a) => (a[action.term] > b[action.term]) ? 1 : -1);
    }
    return ({ Employees: sortedEmployeeList, 
              CurrentFilter,
              CurrentSort: action.term,
              SortDirection});

  default:
    return {Employees, CurrentFilter, CurrentSort,SortDirection};
  }
}

function EmployeeProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer,
    {Employees: Data, CurrentFilter: "", CurrentSort: "", SortDirection: "asc"});

  return <Provider value={[state, dispatch]} {...props} />;
}

function useEmployeeContext() {
  return useContext(EmployeeContext);
}

export { EmployeeProvider, useEmployeeContext };
