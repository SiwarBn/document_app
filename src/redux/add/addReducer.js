
import { ADD_DOC } from "./addType"


const initialstate = {
    docs: []
}


const addReducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_DOC: return {
            ...state,
            docs: action.payload
        }
        default: return state
    }
}
export default addReducer