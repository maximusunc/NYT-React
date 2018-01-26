import React, {Component} from "react";
import SearchForm from "../../components/searchForm";
import Search from "../../components/searchArticles";
import API from "../../utils/API.js";

class Articles extends Component {
    state = {
        title: "",
        startDate: "",
        endDate: "",
        articles: []
    };

    handleInputChange = event => {
        var {name, value} = event.target;
        this.setState({[name]: value});
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchArticles({
            title: this.state.title,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        });
        this.setState({
            title: "",
            startDate: "",
            endDate: ""
        });
    };

    searchArticles = query => {
        API.getArticles(query)
            .then(res => this.setState({articles: res.data}))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <SearchForm 
                    title={this.state.title} 
                    startDate={this.state.startDate} 
                    endDate={this.state.endDate} 
                    handleInputChange={this.handleInputChange} 
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Search />
            </div>
        );
    };
};

export default Articles;