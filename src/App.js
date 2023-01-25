import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title = "ApnaMessWallah" aboutText = "About us" feedback = "Feedback"/>
<div className="container my-3">
  <TextForm heading = "Please provide you feedback"/>

</div>
    </>
  );
}

export default App;
