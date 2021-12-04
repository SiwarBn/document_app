import { combineReducers } from "redux";
import addReducer from "./add/addReducer";
import listReducer from "./liste/listReducer";

const rootReducer = combineReducers({
    list: listReducer,
    add: addReducer
})

export default rootReducer