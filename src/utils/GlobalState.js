import React, { createContext, useReducer, useContext } from "react";
import Data from "../data/data.json";

const EmployeeContext = createContext({
  Employees: [ {
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      image: ""}],
  CurrentFilter: ""

});
const { Provider } = EmployeeContext;

function reducer(state, action) {
  switch (action.type) {
    case "clear":
      state.Employees = Data;
      return ({Employees: state.Employees, 
               CurrentFilter: ""});
  case "search":
    // whenever we do a sort, we want to start with the full list.
    state.Employees = Data;
    let filteredEmployeeList  = state.Employees.filter((item, index) => {
            return item.firstName.includes(action.term) ||
            item.lastName.includes(action.term) ||
            item.phoneNumber.includes(action.term) || 
            item.department.includes(action.term); });
    return ({ Employees: filteredEmployeeList, 
              CurrentFilter: action.term});
  case "sort":
    let sortedEmployeeList = state.Employees.sort((a, b) => (a[action.term] > b[action.term]) ? 1 : -1);
    return ({ Employees: sortedEmployeeList, 
              CurrentFilter: action.term});
  default:
    return state;
  }
}

function EmployeeProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer,{Employees: Data, CurrentFilter: ""});

  return <Provider value={[state, dispatch]} {...props} />;
}

function useEmployeeContext() {
  return useContext(EmployeeContext);
}

export { EmployeeProvider, useEmployeeContext };
