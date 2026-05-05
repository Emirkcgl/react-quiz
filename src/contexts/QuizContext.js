import { createContext, useReducer, useContext } from "react";
const initialState = {
  questions: [],

  //loading "error","ready","finished",'active'
  status: "loading",
  index: 0, //mevcut soru index'i
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const QuizContext = createContext();
const SECONDS_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived": {
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    }
    case "dataFailed": {
      return {
        ...state,
        status: "error",
      };
    }
    case "start": {
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECONDS_PER_QUESTION,
      };
    }

    case "newAnswer": {
      const question = state.questions[state.index];

      const newState = {
        ...state,
        answer: action.payload,
        points: action.payload === question.correctOption ? state.points + question.points : state.points,
      };
      console.log("Tıklamadan Sonra Güncellenmiş State:", newState);
      return newState;
    }

    case "nextQuestion": {
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    }
    case "finish": {
      return {
        ...state,
        status: "finished",
        highscore: state.points > state.highscore ? state.points : state.highscore,
      };
    }
    case "restart": {
      return {
        ...initialState,
        questions: state.questions,
        status: "ready",
      };
    }
    case "tick": {
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    }
    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const numQuestions = state.questions.length;
  const maxPossiblePoints = state.questions.reduce((prev, cur) => prev + cur.points, 0);

  return <QuizContext.Provider value={{ ...state, dispatch, numQuestions, maxPossiblePoints }}>{children}</QuizContext.Provider>;
}

export default QuizProvider;

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
