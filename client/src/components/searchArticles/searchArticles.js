import React from "react";
import "./searchArticles.css";

const SearchArticles = props => 
    <div className="container">
        <a href={props.url} target="_blank" id={props.id}>{props.title}</a>
        <button id={props.id} onClick={props.onClick}>Save</button>
    </div>;

export default SearchArticles;