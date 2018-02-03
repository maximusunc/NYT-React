import React from "react";
import "./savedArticles.css";

const SavedArticles = props => 
    <div className="articles">
        <a className="article" href={props.url} target="_blank">{props.title}</a>
        <button className="btn btn-info" onClick={() => props.handleDelete(props.id)}>Delete</button>
    </div>;

export default SavedArticles;
