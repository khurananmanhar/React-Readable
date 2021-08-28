import './App.css';
import Header from '../Header/Header';
import Navbar from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Books from '../Books/Books';
import Letter from '../News Letter/Letter';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Landing/>
      <div className="bookContainer">
      <Books/>
      </div>
      <Letter/>
      <Footer/>
    </div>
  );
}

export default App;
