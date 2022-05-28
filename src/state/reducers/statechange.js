const siloreducer =(state=0,action)=>{
    if(action.type==='signupstate')
    return action.payload;
    else if(action.type==='loginstate')
    return action.payload
    else
    return state;
}

export default siloreducer;