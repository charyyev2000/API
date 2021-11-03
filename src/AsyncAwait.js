import axios from "axios";
import React, { useEffect, useState } from "react";

const AsyncAwait = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return "loading...";

  return (
    <div>
      {data.map((item) => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

export default AsyncAwait;
