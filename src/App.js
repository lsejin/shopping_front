import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JOIN from "../src/page/join";
import LOGIN from "../src/page/login";
import MAIN from "../src/page/main";

//연습
import Say from './page/Say';
import Info from './page/Info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MAIN />} />
        <Route path="/join" element={<JOIN />} />
        <Route path="/login" element={<LOGIN />} />
        <Route path="/say" element={<Say />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
