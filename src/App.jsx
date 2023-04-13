import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MainMenu from "./Components/MainMenu";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Users from "./Pages/Users";

function App() {
  return (
    <div className="container">
      <Router>
        <MainMenu />
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/users" element={<Users/>}/>
        </Routes>
      </Router>
      
    </div>
    
  );
}

export default App;
