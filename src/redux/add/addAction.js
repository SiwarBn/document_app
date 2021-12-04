import { ADD_DOC } from './addType'

export const addDoc = docs => {
    return {
        type: ADD_DOC,
        payload: docs
    }
}

