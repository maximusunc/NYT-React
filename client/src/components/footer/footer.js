import React from "react";
import "./footer.css";

const Footer = () =>
    <footer className="page-footer blue center-on-small-only">

        {/* <!--Footer Links--> */}
        <div className="container-fluid">
            <div className="row">

                {/* <!--First column--> */}
                <div className="col-md-6">
                    <h3 className="title">Please give me a job</h3>
                    <p>I know React.</p>
                </div>
                {/* <!--/.First column--> */}

                {/* <!--Second column--> */}
                <div className="col-md-6">
                    <h3 className="title">Connect with me!</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/maxwell-s-wang/">LinkedIn</a></li>
                        <li><a href="https://github.com/maximusunc">Github</a></li>
                        <li><a href="https://maximusunc.github.io/MaxsPortfolio/">Portfolio</a></li>
                    </ul>
                </div>
                {/* <!--/.Second column--> */}
            </div>
        </div>

        {/* <!--Copyright--> */}
        <div className="footer-copyright">
            <div className="container-fluid">
                © 2018 Copyright: <a href="https://maximusunc.github.io/MaxsPortfolio/"> Max Wang </a>

            </div>
        </div>

    </footer>;

export default Footer;