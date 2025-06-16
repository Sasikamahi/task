// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import CSE from "./components/courses/Cse";
import CCE from "./components/courses/CCE";
import IT from "./components/courses/IT";
import AIML from "./components/courses/AiMl";
import AIDS from "./components/courses/AiDs";
import Signup from "./components/Signup";

function App() {
  const isLogin = localStorage.getItem("isLogin") === "true";
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={isLogin ? <Home /> : <Login />} />
          <Route path="/cse" element={isLogin ? <CSE /> : <Login />} />
          <Route path="/it" element={isLogin ? <IT /> : <Login />} />
          <Route path="/cce" element={isLogin ? <CCE /> : <Login />} />
          <Route path="/aiml" element={isLogin ? <AIML /> : <Login />} />
          <Route path="/aids" element={isLogin ? <AIDS /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
