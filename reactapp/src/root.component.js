import "./style.css";
// import { navigateToUrl } from "single-spa";
import React, { useEffect, useState } from "react";

export default function Root(props) {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("ini dataa", data);
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <section>
      <h1>{props.name} is mounted!</h1>
      <h2>hallo</h2>
      {/* <button className="btn-navigate" onClick={navigateToUrl("/root-config")}>root</button> */}

      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              name:{user.name}, email: {user.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
