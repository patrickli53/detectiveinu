import { Button } from 'react-bootstrap';
import React from 'react'
import { IconContext } from "react-icons";
import { FaTwitterSquare, FaMedium, FaTelegram} from 'react-icons/fa'
import './styles.css'
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div id="contact">
            <IconContext.Provider value={{ color: "#99ddff", size: "4em" }}>
                <div className="icons">
                    <a href="https://twitter.com/Detective_Inu">
                        <FaTwitterSquare className="icon" />
                    </a>
                    
                    <FaMedium className="icon" />
                    <a href="https://t.me/DetectiveInuOfficial">
                        <FaTelegram className="icon"/>
                    </a>
                </div>
            </IconContext.Provider>
            <div className="contactText">
            Stay involved with our community and get the latest updates as they happen.
            </div>
        </div>
    )
}

export default Contact
