import React from "react"
import { connect } from 'react-redux'
import { addDoc } from '../redux'

function AddDoc(props) {
    return (
        <div>
            <h2>Add Doc</h2>
            <form >
                <label htmlFor="title" > Title :</label>
                <input
                    id="title"
                    type="text"
                    placeholder="Title"
                />
                <label htmlFor="username" > User Name :</label>
                <input
                    id="username"
                    type="text"
                    placeholder="username"
                />
                <button onClick={props.addDoc}> Add Doc</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        docData: state.docs
    }

}
const mapDispatchToProps = dispatch => {
    return {
        addDoc: () => dispatch(addDoc)
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(AddDoc)
