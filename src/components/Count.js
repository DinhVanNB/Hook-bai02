import React, { useEffect} from 'react';


export const Count=({count,setCount}) =>{
    useEffect(()=>{
        const timerId = setInterval(()=>setCount(prev => prev-1),1000);
        return ()=>clearInterval(timerId)
      },[]);
  return(
    <>
        <p>Count down from {count}</p>
    </>
  );
}

