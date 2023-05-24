import React, { Component } from 'react';
import { PlayerList } from '../ListOfPlayers';
import PlayersPresentation from './PlayersPresentation';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: PlayerList,
    };
  }
  render() {
    return <PlayersPresentation players={this.state.players} />;
  }
}
export default Main