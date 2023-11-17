import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/login'
import Home from './components/home'
import Register from './components/register'
import Questions from "./components/questions";
import Logout from "./components/logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="questions" element={<Questions />}></Route>
        <Route path="logout" element={<Logout />}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
