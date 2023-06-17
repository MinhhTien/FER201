import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Divider, TextField } from '@mui/material';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, updateUsername } from '../features/Users';

const User = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);
  const [newUsername, setNewUsername] = useState('');

  return (
    <List
      sx={{
        width: '60%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 2,
        boxShadow: 2,
      }}
    >
      {userList.map((user) => (
        <>
          <ListItem
            key={user.id}
            ex={{ display: 'flex', alignItems: 'stretch', width: '100%' }}
          >
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              sx={{ width: '40%' }}
              primary={user.name}
              secondary={user.username}
            />
            <TextField
              ex={{ m: 1 }}
              fullWidth
              label="Type new username..."
              variant="standard"
              onChange={(event) => setNewUsername(event.target.value)}
            />
            <Button
              variant="contained"
              sx={{ m: 1 }}
              onClick={() =>
                dispatch(updateUsername({ id: user.id, username: newUsername }))
              }
            >
              UPDATE
            </Button>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default User;
