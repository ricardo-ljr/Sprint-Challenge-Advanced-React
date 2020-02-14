import React from "react";
import PropTypes from "prop-types";

function Players(props) {
  return (
    <>
      {props.player.map(player => (
        <div key={player.id} className="player">
          <h1>{player.name}</h1>
          <h2>Country: {player.country}</h2>
          <p>Searches: {player.searches}</p>
        </div>
      ))}
    </>
  );
}

export default Players;
