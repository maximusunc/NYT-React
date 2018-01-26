import React from "react";
import "./searchForm.css";

const SearchForm = props => 
    <div>
        <form className="container">
            <div className="form-group row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Topic</label>
                <div className="col-sm-10">
                <input
                    value={props.title}
                    onChange={props.handleInputChange}
                    name="title"
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Topic"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date</label>
                <div className="col-sm-10">
                <input
                    value={props.startDate}
                    onChange={props.handleInputChange}
                    name="startDate"
                    type="text"
                    className="form-control"
                    id="startDate"
                    placeholder="Start Date"
                />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date</label>
                <div className="col-sm-10">
                <input
                    value={props.endDate}
                    onChange={props.handleInputChange}
                    name="endDate"
                    type="text"
                    className="form-control"
                    id="endDate"
                    placeholder="End Date"
                />
                </div>
            </div>
            <div className="form-group row">
                <div className="col-sm-10">
                <button
                    className="btn btn-primary"
                    onClick={props.handleFormSubmit}
                >
                    Search
                </button>
                </div>
            </div>
        </form>
    </div>;

export default SearchForm;