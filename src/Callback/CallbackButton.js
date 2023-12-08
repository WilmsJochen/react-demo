import React from "react";


export function CallbackButton({onCLickCallback}){

    const onCLickHandle = () => {
        console.log("CallbackButton clicked, executing callback function")
        onCLickCallback()
    }

    return(
        <button onClick={onCLickHandle} >Click CallbackButton</button>
    )
}