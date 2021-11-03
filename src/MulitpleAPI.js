import axios from "axios";
import React, { useEffect, useState } from "react";

const MulitpleAPI = () => {
  const [playerName, setPlayerName] = useState([]);
  const [playerPic, setPlayerPic] = useState([]);

  const fetchData = () => {
    const playerAPI = "https://www.balldontlie.io/api/v1/players/237";
    const playerPic = "https://nba-players.herokuapp.com/players/james/lebron";

    const getNBAPlayer = axios.get(playerAPI);
    const getPlayerPic = axios.get(playerPic);
    axios.all([getNBAPlayer, getPlayerPic]).then(
      axios.spread((...allData) => {
        const allDataPlayer = allData[0].data.first_name;
        const getNBAPlayerPic = allData[1].config.url;

        setPlayerName(allDataPlayer);
        setPlayerPic(getNBAPlayerPic);
      })
    );
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div>
      Player Name: {playerName}
      <img src={playerPic} />
    </div>
  );
};

export default MulitpleAPI;
