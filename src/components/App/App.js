import './App.css';
import Header from '../Header/Header';
import Navbar from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Books from '../../Books/Books';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Landing/>
      <div className="bookContainer">
      <Books/>
      </div>
    </div>
  );
}

export default App;
