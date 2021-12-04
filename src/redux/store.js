import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"
import thunk from "redux-thunk"
import listReducer from "./liste/listReducer"
import addReducer from "./add/addReducer"
import rootReducer from "./rootReducer"

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store