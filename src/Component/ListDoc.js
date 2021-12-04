import React, { useEffect } from "react"
import { connect } from 'react-redux'
import { fetchList } from '../redux'




function ListDoc({ docData, fetchList }) {
    useEffect(() => {
        fetchList()
    }, [])

    return docData.loading ?
        (
            <h2>Loading</h2>
        )
        : docData.error ? (
            <h2>{docData.error}</h2>
        ) : (
            <div>
                <h2> liste document </h2>
                <div>
                    {docData && docData.docs && docData.docs.map(doc => <p>{doc.username}</p>)}
                </div>
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
        fetchList: () => dispatch(fetchList)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListDoc)
