import React from "react";
import "./savedArticles.css";

const SavedArticles = props => 
    <div>
        <a href={props.url} target="_blank">{props.title}</a>
        <button onClick={() => props.handleDelete(props.id)}>Delete</button>
    </div>;

export default SavedArticles;
