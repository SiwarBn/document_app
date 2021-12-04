import { FETCH_DOC_REQUEST, FETCH_DOC_SUCCESS, FETCH_DOC_FAILURE } from './listType'
import axios from 'axios'


export const fetchList = () => {
    return (dispatch) => {
        dispatch(fetchDocRequest())
        axios
            .get('http://localhost:3200/doc')
            .then(response => {
                const docs = response.data
                dispatch(fetchDocSuccess(docs))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchDocFailure(errorMsg))
            })

    }
}

export const fetchDocRequest = () => {
    return {
        type: FETCH_DOC_REQUEST

    }
}


export const fetchDocSuccess = docs => {
    return {
        type: FETCH_DOC_SUCCESS,
        payload: docs
    }
}

export const fetchDocFailure = error => {
    return {
        type: FETCH_DOC_FAILURE,
        payload: error
    }
}