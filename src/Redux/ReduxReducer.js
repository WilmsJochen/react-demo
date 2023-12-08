
const initialState ={
    amount: 0,
    actionAmount: 0
}
export function reduxReducer(state =  initialState, action) {
    console.log("Reducer triggered", action)
    switch (action.type) {
        case 'ADD':
            console.log("Reduced ADD");
            return {
                ...state,
                amount:  state.amount + action.amount
            }
        case 'ADD_ACTIONS':
             console.log("Reduced ADD_ACTIONS");
            return {
                ...state,
                actionAmount:  state.actionAmount + action.amount,
            }
        default:
            return state
    }
}