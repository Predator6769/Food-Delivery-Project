export const signupstate = (state)=>{
    return (dispatch)=>{
        dispatch({
            type:'signupstate',
            payload:state
        })
    }
}

export const loginstate = (state)=>{
    return (dispatch)=>{
        dispatch({
            type:'loginstate',
            payload:state
        })
    }
}