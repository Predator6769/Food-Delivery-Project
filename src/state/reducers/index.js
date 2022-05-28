import {combineReducers} from 'redux'
import siloreducer from './statechange'

const reducers=combineReducers({
    sistate:siloreducer
});

export default reducers;