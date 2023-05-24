import React, { useState } from 'react';
import { PlayerList } from '../ListOfPlayers';

export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([...players]);
    return (
      <div className="container">
        {PlayerList.map((player) => (
          <div key={player.id} className="column">
            <div className="card">
              <img src={player.img} alt={player.name} />
              <h3>{player.name}</h3>
              <p className="title">{player.club}</p>
              <p>
                <button onClick={() => {setPlayer(player)}}>
                  <a href='#popup1' id='openPopUp'>Detail</a>
                </button>
              </p>
            </div>
          </div>
        ))}
        <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={player.img} alt={player.name} />
            <h2>{player.name}</h2>
            <a className='close' href='#'>&times;</a>
            <div className='content'>
              <p>{player.info}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
