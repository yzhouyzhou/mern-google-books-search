import React from "react";
import "./style.css";

function Footer(props) {
    console.log(props);
    return (
        <footer className="Footer">
            <div className="container">
                <div className="text-center text-white">
                    <img className="logo" alt="logo" src="logo192.png"></img>
                    <span> CopyWrite</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;