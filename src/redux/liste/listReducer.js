import { FETCH_DOC_FAILURE, FETCH_DOC_REQUEST, FETCH_DOC_SUCCESS } from "./listType"


const initialSatate = {
    loading: false,
    docs: [],
    error: ''
}

const listReducer = (state = initialSatate, action) => {
    switch (action.type) {
        case FETCH_DOC_REQUEST: return {
            ...state,
            loading: true
        }
        case FETCH_DOC_SUCCESS: return {
            loading: false,
            docs: action.payload,
            error: ''
        }
        case FETCH_DOC_FAILURE: return {
            loading: false,
            docs: [],
            error: action.payload
        }
        default: return state
    }
}

export default listReducer