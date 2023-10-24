import React, { Component } from 'react'


export default class ClassComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentWillMount() {
        console.log("componentWillMount")
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps",nextProps)
    }
    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    componentDidMount() {
        console.log("componentDidMount")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate")
    }

    render() {
        return(
            <>
                <h1>
                    this is a class component
                </h1>
                <span>you clicked {this.state.count} times on the class component</span>
                <br/>
                <button onClick={()=> this.setState({count: this.state.count +1 })} >CLick me</button>
            </>


        )
    }
}