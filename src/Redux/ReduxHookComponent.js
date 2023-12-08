import React from "react";
import {connect} from "react-redux";

function ReduxHookComponent(props){
    console.log(props)
    const buttonClickAction = async () => {
        console.log("buttonClickAction")
        await props.dispatch({
            type: 'ADD',
            amount: 1
        });
    }

    return (
        <div>
            <h1>
                this is a component with redux state
            </h1>
            <span>the redux amount is set to {props.amount} </span>
            <br/>
            <button onClick={buttonClickAction} >Increase with action</button>
            <br/>
        </div>
    )
}

function mapStateToProps(state, ownProps){
    const { amount } = state;
    console.log("mapStateToProps", amount)
    return { amount: amount, ...ownProps }
}

export default connect(mapStateToProps)(ReduxHookComponent)

