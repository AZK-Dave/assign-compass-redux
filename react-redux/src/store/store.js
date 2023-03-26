import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import { Reducers } from "./reducers"

const middleware=composeWithDevTools(applyMiddleware(thunk))

export const configureStore = (preState) => {
    const store = createStore(Reducers(), preState, middleware)
    return {
        store: store
    }
};