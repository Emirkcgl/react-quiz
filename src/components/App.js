/* import DateCounter from './DateCounter';*/
import Header from "./Header";
import Main from "./Main";
import { useEffect } from "react";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import Progress from "./Progress";
import FinishedScreen from "./FinishedScreen";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";
export default function App() {
  /*  const [{ questions, status, index, answer, points, highscore, secondsRemaining }, dispatch] = useReducer(reducer, initialState) */

  const { status, dispatch, numQuestions, maxPossiblePoints, questions, index, answer, points, highscore, secondsRemaining } = useQuiz();

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === "active" && (
          <>
            <Progress index={index} numQuestions={numQuestions} points={points} totalPoints={maxPossiblePoints} answer={answer} />
            <Question questions={questions[index]} answer={answer} dispatch={dispatch} index={index} numQuestions={numQuestions} />
            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          </>
        )}
        {status === "finished" && <FinishedScreen points={points} totalPoints={maxPossiblePoints} dispatch={dispatch} highscore={highscore} />}
      </Main>
    </div>
  );
}
