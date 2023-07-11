import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Modal from "./Modal";

const App = () => {
  //First we imported the useState hook to store our api data and selected user Data

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect was imported and use to call the api and set the data in setUsers
  //axios was use to fetch the data from api
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /* This function is used for opening modal */

  const openModal = (user) => {
    setSelectedUser(user);

    setIsModalOpen(true);
  };
  /* This function is used for opening modal */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // In this return function we are returning user data list and printing and modal component is rendering

  return (
    <div>
      <h1>USER LIST</h1>
      <div className="main_div">
        {users.map((user) => (
          <div key={user.id} className="userList">
            <h4>{user.name}</h4>
            <button
              className="open_modal"
              onClick={() => {
                openModal(user);
              }}
            >
              Open Modal
            </button>
          </div>
        ))}
        <Modal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          selectedUser={selectedUser}
        />
      </div>
    </div>
  );
};

export default App;
