import "./App.css";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Sources from "./pages/Sources";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/about">About</Link>
        <br></br>
        <Link to="/sources">Sources</Link>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
