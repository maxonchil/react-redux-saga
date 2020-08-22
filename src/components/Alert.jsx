import React from "react";
import {useDispatch} from "react-redux";

const Alert = ({alertMessage}) => {
    const dispatch = useDispatch();
    return (<div className="alert alert-danger" role="alert">
        {alertMessage}
    </div>)
};


export default Alert;
