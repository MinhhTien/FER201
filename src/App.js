import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AddUser from './components/AddUser';
import User from './components/User';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      <Navigation />
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

      <Footer />
    </div>
  );
}

export default App;
