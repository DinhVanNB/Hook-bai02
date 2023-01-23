import './App.css';
import React, {useState, useEffect} from 'react';
import { Count } from './components/Count';


export const App=() =>{
  const [count, setCount] = useState(10);
 
  let elemt = <Count count={count} setCount={setCount}/>
  return(
    <div className='container align-items-center float-start'>
        {count===-1? alert(`Time's up`): elemt}
    </div>
  );
}

