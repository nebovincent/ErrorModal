import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
// const DUMMY_DETAILS = [
//   {
//     key: 1,
//     name: "John",
//     age: "12",
//   },
// ];

function App() {
  const [details, setDetails] = useState([]);

  const savedDetails = (data) => {
    setDetails((prevDetails) => {
      return [data, ...prevDetails];
    });
  };
  return (
    <div>
      <AddUser getDetails={savedDetails} />
      {details.length && <UsersList users={details} />}
    </div>
  );
}

export default App;
