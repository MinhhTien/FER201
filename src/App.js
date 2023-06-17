import './App.scss';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Main />
          }
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
