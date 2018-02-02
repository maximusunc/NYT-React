import React from "react";
import "./searchForm.css";

const SearchForm = props => 
    <div>
        <form className="container">
            <div className="form-group row">
                <label htmlFor="title" className="col-sm-2 col-form-label">Topic</label>
                <div className="col-sm-10">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="search"
                    type="text"
                    className="form-control"
                    id="search"
                    placeholder="Topic"
                    />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="startDate" className="col-sm-2 col-form-label">Start Date (Optional)</label>
                <div className="col-sm-10">
                <input
                    value={props.startDate}
                    onChange={props.handleInputChange}
                    name="startDate"
                    type="text"
                    className="form-control"
                    id="startDate"
                    placeholder="yyyymmdd"
                />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="endDate" className="col-sm-2 col-form-label">End Date (Optional)</label>
                <div className="col-sm-10">
                <input
                    value={props.endDate}
                    onChange={props.handleInputChange}
                    name="endDate"
                    type="text"
                    className="form-control"
                    id="endDate"
                    placeholder="yyyymmdd"
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