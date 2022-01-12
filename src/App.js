import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Create from './Create';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route exact path="create" element={<Create/>}/>
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
