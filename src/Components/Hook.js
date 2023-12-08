import React, { useEffect, useState} from "react";


export default function Hook(){
    const [count, setCount] =useState(0)
    const [secondCount, setSecondCount] =useState(0)
    useEffect(() => {
        console.log("unconditional useEffect")
    });
    useEffect(() => {
        console.log("count useEffect")
    }, [count]);

    return(
        <div>
            <h1>
                this is a react hook
            </h1>
            <span>you clicked {count} times on the Hook </span>
            <br/>
            <button onClick={()=> setCount(count +1 )} >Click me</button>

            <br/>
            <br/>
            <span>secondCount {secondCount} </span>
            <br/>
            <button onClick={()=> setSecondCount(secondCount +1 )} >Click me</button>
        </div>
    )
}