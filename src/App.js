import React , {useState} from 'react'

const App = () =>{
  const [counter,SetCounter] =useState(0);
  const handleIncrement = ()=>{
    SetCounter(counter+1);
  };
  const handleDecrement = ()=>{
    SetCounter(counter-1);
  }
  const handleReset = ()=>{
    SetCounter(0);
  }
  const handleDelayedIncrement = ()=>{
    setTimeout(()=>{
      SetCounter((prevState)=>prevState+1);
    },3000);
  }
  return(
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter App</h1>
          <div className="my-5">
            <p className="my-5">
              {counter}
            </p>
            <button className="btn btn-primary mx-3" onClick={handleDelayedIncrement} >Delayed Increment</button>
            <button className="btn btn-success mx-3" onClick={handleIncrement} >Increment</button>
            <button className="btn btn-danger mx-3" onClick={handleDecrement} disabled={counter===0?true:false}>Decrement</button>
            <button className="btn btn-secondary mx-3" onClick={handleReset} disabled={counter===0?true:false} >Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App