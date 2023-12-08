
//actions are needed to resolve promises
export const incrementAction = amount => async dispatch => {
    //Execute Async function here.
    dispatch({
        type: 'ADD_ACTIONS',
        amount: amount
    })
}