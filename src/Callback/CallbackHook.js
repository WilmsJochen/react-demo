import React, {useCallback, useState} from "react";
import {CallbackButton} from "./CallbackButton";


export default function CallbackHook(){
    const [count, setCount] =useState(0)
    const [secondCount, setSecondCount] =useState(0)

    //ignore
    const onCLickCallback = useCallback(() => {
        console.log("callback executed")
        setCount(count +1 )
    },[count, setCount]);

    const callbackWithWrongDependency = useCallback(() => {
        console.log("callbackWithWrongDependency executed")
        console.log("secondCount available in callback", secondCount)

        setSecondCount(secondCount +1 )
        //Dependency is set on count instead of secondCount for demo purposes
        //eslint-disable-next-line
    },[count, setSecondCount]);



    return(
        <div>
            <h1>
                Callbacks
            </h1>
            <span>you clicked {count} times on the Hook </span>
            <br/>
            <CallbackButton onCLickCallback={onCLickCallback}/>
            <br/>
            <br/>

            <span>you clicked {secondCount} times on the Hook </span>
            <br/>
            <CallbackButton onCLickCallback={callbackWithWrongDependency}/>
        </div>
    )
}