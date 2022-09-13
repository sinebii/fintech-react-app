import React from "react";
import "./Signup.css";

const Signup = (props)=>{

    if(!props.show){
        return null;
    }

    return(
        <div className="modal">
            <div className="modal_content">
                <div className="modal_header">
                    <button onClick={props.onClose}>Close</button>
                </div>
                <div className="modal_body">
                    <p>Modal Body here</p>
                </div>
                <div className="modal_footer">
                    <p>Modal footer here</p>
                </div>
            </div>

        </div>
    )
}

export default Signup;