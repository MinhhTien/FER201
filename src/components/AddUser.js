import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addUser } from '../features/Users';
import { useDispatch } from 'react-redux';

const AddUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');

  return (
    <Box
      component="form"
      sx={{
        width: '30%',
        '& > :not(style)': { m: 1 },
        boxShadow: 1,
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Name"
        name="Name"
        variant="outlined"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Username"
        name="Username"
        variant="outlined"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Button
        variant="contained"
        onClick={() => dispatch(addUser({ id: 0, name, username }))}
      >
        ADD USER
      </Button>
    </Box>
  );
};

export default AddUser;
