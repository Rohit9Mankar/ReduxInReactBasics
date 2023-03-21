import classes from './Counter.module.css';
import { useSelector , useDispatch} from 'react-redux';
import { CounterActions } from '../store';

const Counter = () => {
  const dispatch=useDispatch();
  const counter= useSelector(state => state.counter.counter);
 const show= useSelector(state => state.counter.showCounter);

  const incrementHandler=()=>{
    dispatch(CounterActions.increment());
  };

  const decrementHandler=()=>{
    dispatch(CounterActions.decrement());
  };

  const incrementBy5Handler=()=>{
    dispatch(CounterActions.increase(5));
  };

  const decrementBy5Handler=()=>{
    dispatch(CounterActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(CounterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
      <button onClick={incrementBy5Handler}>Increment +5</button>
        <button onClick={decrementBy5Handler}>Decrement -5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
