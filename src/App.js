// import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import AsyncAwait from "./AsyncAwait";
import Axios from "./Axios";
import FetchAPI from "./FetchAPI";
import MulitpleAPI from "./MulitpleAPI";

function App() {
  return (
    <div>
      {/* <FetchAPI /> */}
      {/* <Axios /> */}
      {/* <MulitpleAPI /> */}
      <AsyncAwait />
    </div>
  );
}

// const FetchApi = () => {
//   const [users, setUsers] = useState([]);
//   const apiGet = () => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         // console.log(json);
//         setUsers(json);
//       });
//   };

//   useEffect(() => {
//     apiGet();
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <div>{user.name}</div>
//       ))}
//     </div>
//   );
// };

export default App;

// useEffect(() => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => {
//       setImages(res.data);
//       console.log(res.data);
//     })
//     .catch((error) => console.log(error));
// }, []);
