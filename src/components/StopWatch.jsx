import "./StopWatch.css";
import React, { useRef, useState } from "react";

const StopWatch = () => {
    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    const intervalStore=useRef(null);

    const getStarted=()=>{
        if(!isRunning){
            setIsRunning(true);
            intervalStore.current=setInterval(()=>{
                setTime((prev)=>prev+10)

            },10);

        }
        
    }
    const getPaused=()=>{
        clearInterval(intervalStore.current);
        setIsRunning(false);
    }
    const getReset=()=>{
        clearInterval(intervalStore.current);
        setTime(0);
        setIsRunning(false);
    }

    const hours=Math.floor(time/3600000);
    const minutes=Math.floor((time%3600000)/60000);
    const seconds=Math.floor((time%60000)/1000);
    
    const hourDeg=(hours%12)*30 + (minutes/60)*6;
    const minuteDeg=minutes*6+(seconds/60)*6;
    const secondDeg=seconds*6;
    //console.log("Time:", time); to check whether start is working or not for digital clock
    //console.log("SecondDeg:", secondDeg, "MinuteDeg:", minuteDeg, "HourDeg:", hourDeg);
//     const seconds = (time / 1000) % 60;
// const minutes = (time / 60000) % 60;
// const hours = (time / 3600000) % 12;

// const secondDeg = seconds * 6;
// const minuteDeg = minutes * 6;
// const hourDeg = hours * 30;


    
  return (
    <div className="container">
        <div className="clock">
            {[...Array(12)].map((_, i) => (
          <div key={i} className="number" style={{
            transform: `rotate(${i * 30}deg) translateY(-85px)`,
          }}>{i === 0 ? 12 : i}</div>
        ))}
            
            <div className="hand hour" style={{transform: `rotate(${hourDeg}deg)`}}></div>
            <div className="hand minute" style={{transform: `rotate(${minuteDeg}deg)`}}></div>
            <div className="hand second" style={{transform: `rotate(${secondDeg}deg)`}}></div>
            <div className="center-dot"></div>


        </div>
        <h2>{formatTime(time)}</h2>
       <div className="buttons">
        <button onClick={getStarted}>Start</button>
      <button onClick={getPaused}>Pause</button>
      <button onClick={getReset}>Reset</button>
    </div> 
    </div>
  )
}
  const formatTime=(time)=>{
        const hours=String(Math.floor(time/3600000)).padStart(2,"0");
        const minutes=String(Math.floor((time%360000)/60000)).padStart(2,"0");
        const seconds=String(Math.floor((time%60000)/1000)).padStart(2,"0");
        return `${hours}:${minutes}:${seconds}`;


    };


export default StopWatch
