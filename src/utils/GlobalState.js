import React, { createContext, useReducer, useContext } from "react";
import Data from "../data/data.json";

const EmployeeContext = createContext({
  id: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  image: "",


});
const { Provider } = EmployeeContext;

function reducer(state, action) {
  switch (action.type) {
  case "search":
    return state.filter((item, index) => {
      return item.firstName.includes(action.value) ||
             item.lastName.includes(action.value) ||
             item.phoneNumber.includes(action.value);
    });
  case "sort":
    return state.sort((a, b) => (a[action.value] > b[action.value]) ? 1 : -1)
  default:
    return state;
  }
}

function EmployeeProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, Data);

  return <Provider value={[state, dispatch]} {...props} />;
}

function useEmployeeContext() {
  return useContext(EmployeeContext);
}

export { EmployeeProvider, useEmployeeContext };
