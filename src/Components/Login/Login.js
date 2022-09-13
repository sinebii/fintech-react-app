import React, { useState } from 'react';
import "./Login.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Signup from '../signup/Signup';


const Login = ()=>{
    const [show, setShow] = useState(false);

    return(
        
        <div className="login_container">
            <Signup onClose={()=>setShow(false)}show={show}/>
            <div className="top_bar">
                <p><FaCompressArrowsAlt/>Jeje Pay</p>
            </div>
    
            <div className="login_header">
                <p>Making payment easy</p>
            </div>
            <div className="login_signup_containner">
                <form method="">
                    <div className="form_control">
                        <label for="email">Email</label>
                        <input type="email" placeholder="e.g abc@gmail.com"/>
                    </div>
                    <div className="form_control">
                        <label for="password">Password</label>
                        <input type="password" placeholder="*****"/>
                    </div>
                    <div className="form_control">
                        <button type="submit"> <FaArrowAltCircleRight className="login_icon"/> LOGIN</button>
                    </div>
                    <div className="register_account_link">
                        <p>Dont have account? <span onClick={()=>setShow(true)}>Register here</span></p>
                    </div>
                </form>
            </div>
            <div className="login_footer">
                <p>
                    All rights reserved
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaWhatsapp/>
                </p>
                
            </div>
        </div>
    )
}
export default Login;