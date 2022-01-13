import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import HomeClass from "./HomeClass";
import Navbar from "./Navbar";
import Create from "./Create";
import Blogdetails from "./Blogdetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create/>}/>
            <Route path="/blogs/:id" element={<Blogdetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
