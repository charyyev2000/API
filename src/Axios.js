import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

export default Axios;

/* const [data, setData] = useState(null)
    const [loading, setLoadind] = useState(true)
    const [error, setError ] = useState(null)

    useEffect(() => {
        axios('url-here')
        .then((res) => {
            setData(res.data)
            setLoading(false)
        },
        (error) => {
            console.error("Error fetching data: ", error)
            setError(error)
        })
    }, [])

    if(loading) return "Loading"
    if(error) return "Error"
*/
