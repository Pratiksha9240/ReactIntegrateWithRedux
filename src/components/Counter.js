import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const show = useSelector(state => state.showCounter);

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  const incrementBy2Handler = () => {
    dispatch({ type: "incrementBy2", amount: 2 });
  };

  const decrementBy2Handler = () => {
    dispatch({ type: "decrementBy2", amount: 2 });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy2Handler}>IncrementBy2</button>
        <button onClick={decrementBy2Handler}>DecrementBy2</button>
      </div>
      <br />
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
