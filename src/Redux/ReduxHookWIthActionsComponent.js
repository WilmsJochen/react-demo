import React from "react";
import {connect} from "react-redux";
import {incrementAction} from "./ReduxActions";

function ReduxHookWithActionsComponent(props){
    console.log(props)
    const buttonClickAction = async () => {
        console.log("buttonClickAction")
        await props.increment(1);
    }

    return (
        <div>
            <h1>
                this is a component with redux actions
            </h1>
            <span>the redux amount is set to {props.actionAmount} </span>
            <br/>
            <button onClick={buttonClickAction} >Increase with action</button>
            <br/>
        </div>
    )
}

function mapStateToProps(state, ownProps){
    const { actionAmount } = state;
    console.log("mapStateToProps", actionAmount)
    return { actionAmount: actionAmount, ...ownProps }
}
const mapDispatchToProps = dispatch => ({
    increment: (amount) =>{
        console.log("mapDispatchToProps, increment", amount)
        dispatch(incrementAction(amount))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxHookWithActionsComponent)

