import { useReducer } from "react";

const initialState={count:0,step:1}

function reducer(state,action){
  console.log(state,action)
  
  switch(action.type){
    case "inc":
      return {...state,count:state.count+state.step}
    case "dec":
      return {...state,count:state.count-state.step}
    case "defineCount":
      return {...state,count:action.payload}
      case "defineStep":
        return { ...state, step: action.payload, count: action.payload};
    case "reset":
      return  initialState
    default:
      return state;
  }
}
function DateCounter() {
 /* const [count, setCount] = useState(0); */
 /* const [step, setStep] = useState(1); */

  const [state,dispatch]=useReducer(reducer,initialState)
  const {count,step}=state


  // Tarih nesnesini değiştirir.
  const date = new Date();
  date.setDate(date.getDate() + state.count);
 

  const dec = function () {
    // setCount((count) => count - 1);
    /* setCount((count) => count - step); */
    dispatch({type:"dec"})
  };

  const inc = function () {
    // setCount((count) => count + 1);
    /* setCount((count) => count + step); */
    dispatch({type:"inc"})
  };

  const defineCount = function (e) {
    /* setCount(Number(e.target.value)); */
    dispatch({type:"defineCount",payload:Number(e.target.value)})
  };

  const defineStep = function (e) {
    /* setStep(Number(e.target.value)) */;
    dispatch({type:"defineStep",payload:Number(e.target.value)})  
  };

  const reset = function () {
    /* setCount(0); */

   /*  setStep(1); */
   dispatch({type:"reset"})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>
        {date.toLocaleDateString("tr-TR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <div>
        <button onClick={reset}>Sıfırla</button>
      </div>
    </div>
  );
}
export default DateCounter;
