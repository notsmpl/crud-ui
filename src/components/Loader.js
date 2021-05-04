import React from 'react'
import { Spinner } from 'reactstrap';

export const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <Spinner  color = "primary" />
        </div>
    )
}
