import React, { useState } from 'react';
import { PlayerList } from '../ListOfPlayers';
import { Link } from 'react-router-dom';

export default function Players() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="container">
      {PlayerList.map((player) => (
        <div key={player.id} className="column">
          <div className="card">
            <img src={player.img} alt={player.name} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <Link>
              <p>
                <button>Detail</button>
              </p>
            </Link>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} alt={player.name} />
          <h2>{player.name}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">
            <p>{player.info}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
