import Quiz from "./components/Quiz/Quiz";
import { jsQuiz } from "./constants";
import { Routes, Route } from "react-router-dom";
import Navbar from "./shared/navbar";
import Register from "./components/Register/register";
import Login from "./components/Login/login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Quiz questions={jsQuiz.questions} />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </div>
  );
}

export default App;
