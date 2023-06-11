import Quiz from "./components/Quiz/Quiz";
// import { useEffect, useState } from "react";
import { jsQuiz } from "./constants";

function App() {
  /*const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try{
      const response = await fetch("");
      const data = await response.json();
      setQuestions(data);
      console.log(data);
    } catch(error){
      console.log(error);
    }
  }*/



  return  /*questions.length &&*/ <Quiz questions={jsQuiz.questions} />;
}

export default App;