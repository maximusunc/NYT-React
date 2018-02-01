import React from "react";
import "./searchArticles.css";
import { Link } from "react-router-dom";

const SearchArticles = props => 
    <div className="container">
        <a href={props.url} id={props.id}>{props.title}</a>
        <Link to="/saved"><button id={props.id} onClick={props.onClick}>Save</button></Link>
    </div>;

export default SearchArticles;