import React, { useState } from "react";

import "./App.css";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [userInput, setUserInput] = useState([]);

  const userInputLifter = (uName, uAge) => {
    setUserInput((prevUserList) => {
      return [...prevUserList, { Name: uName, Age: uAge }];
    });
  };

  return (
    <div className="App">
      <AddUser onLifter={userInputLifter} />
      <UserList usersList={userInput} />
    </div>
  );
}

export default App;
