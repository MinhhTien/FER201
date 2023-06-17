import React, { Component } from 'react';
import { PlayerList } from '../ListOfPlayers';
import { Box } from '@mui/material';
import AddUser from './AddUser';
import User from './User';

export class Main extends Component {
  render() {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          height: '100vh',
          width: '100vw',
          padding: 2,
        }}
      >
        <AddUser />
        <User />
      </Box>
    );
  }
}
export default Main;
