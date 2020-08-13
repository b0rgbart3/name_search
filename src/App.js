import React from 'react';
// import logo from './logo.svg';
import Form from "./components/Form";
import EmployeeList from "./components/EmployeeList";
import { EmployeeProvider } from "./utils/GlobalState";
import './App.css';

function App() {
  return (
    <div className="container">
      <EmployeeProvider>
        <Form />
        <EmployeeList />
      </EmployeeProvider>
    </div>
  );
}

export default App;
