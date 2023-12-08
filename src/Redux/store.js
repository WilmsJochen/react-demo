import { createStore,applyMiddleware } from 'redux'
import {reduxReducer} from "./ReduxReducer";
import {thunk} from "redux-thunk";

export default createStore(
    reduxReducer,
    undefined,
    applyMiddleware(thunk)
)