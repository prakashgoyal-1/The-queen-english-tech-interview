// Question - use useEffect as a component will unmount and make a button to toggle data i.e. timer value.

import React,{useState, useEffect} from 'react'

export default function Timer() {
    const [time, setTime] = useState(10);
    const [hide, setHide] = useState(true);

    const res = setTimeout(() => {
        setTime(20);
       
      }, 1000);

    useEffect(() => {
      return( () =>{
        clearTimeout(res);
    }
      
    )},[time]);

    var toggle = () => {
      if(hide === true)
        setHide(false);
      else 
        setHide(true);
    }
    return (
      <>
        <button onClick={toggle}>click to toggle timer value </button>
        <p>timer value is : {hide && time } </p>
      </>
    )
}
