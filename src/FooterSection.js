import React, { Component } from "react";
import "./App.js";

class FooterSection extends Component {
    render() {
        return (
            <div className="footerWrapper">
                <footer>
                    <p>
                        &copy;
                        <a href="http://blaircodes.com">Blair Irwin </a>
                        March 2020, with thanks to{" "}
                        <a href="https://firebase.google.com/">
                            firebase <i className="fa fa-paw"></i>
                        </a>
                    </p>
                </footer>
            </div>
        )
    }
}

export default FooterSection; 

