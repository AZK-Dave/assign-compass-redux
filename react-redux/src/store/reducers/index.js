import { combineReducers } from "redux"
import userReducer from "./userReducer"


export const Reducers = () => (
    combineReducers({
        usersRoot:userReducer
    })
)