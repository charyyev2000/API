import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);

  const apiGet = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <div>
      {users.map((data) => {
        return <h1>{data.title}</h1>;
      })}
    </div>
  );
};

export default FetchAPI;

/* Fetch API is built into most modern browsers on the window object (window.fetch) and enables us to make HTTP requests very easily.

The only goal of this function is to access the data and to convert the response into JSON using the response.json() method.
Here, the use of the json() method is to get the response object which is stored in data and used to update the state of users in our application.

The fact that Fetch is promise-based means we can also catch errors using the .catch() method. Any error encountered is used as a value to update our error’s state. */
