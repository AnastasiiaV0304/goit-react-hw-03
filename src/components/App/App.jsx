import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import userData from "../../users.json";
import { useState, useEffect } from "react";
import "../App/App.css";
import { nanoid } from "nanoid";

function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem("users");
    if (!stringifiedUsers) return userData;

    const parsedUsers = JSON.parse(stringifiedUsers);
    return parsedUsers;
  });

  const [filter, setFilter] = useState("");

  const onChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const onAddUser = (formInfo) => {
    const addedUser = {
      ...formInfo,
      id: nanoid(),
    };
    setUsers((prevUsers) => [...prevUsers, addedUser]);
  };

  const onDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter((user) => {
    const nameFilter =
      user.name && user.name.toLowerCase().includes(filter.toLowerCase());
    const numberFilter =
      typeof user.number === "string" &&
      user.number.toLowerCase().includes(filter.toLowerCase());
    return nameFilter || numberFilter;
  });

  return (
    <>
      <h1>Phonebook</h1>
      <br />
      <ContactForm onAddUser={onAddUser} />
      <SearchBox onChange={onChange} value={filter} />
      <ContactList users={filteredUsers} onDelete={onDelete} />
    </>
  );
}

export default App;
