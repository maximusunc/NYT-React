import React, {Component} from "react";
import SearchForm from "../../components/searchForm";
import SearchArticles from "../../components/searchArticles";
import API from "../../utils/API.js";
import Container from "../../components/container";

const defaultState = {
    search: "",
    startDate: "",
    endDate: ""
};

class Articles extends Component {
    state = {
        search: "",
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
        if (this.state.search) {
            this.searchArticles({
                search: this.state.search,
                startDate: this.state.startDate,
                endDate: this.state.endDate
            });
        }
        this.setState(defaultState);
    };

    searchArticles = query => {
        API.getArticles(query)
            .then(res => this.setState({articles: res.data.response.docs}))
            .catch(err => console.log(err));
    };

    saveArticle = (article) => {
        API.saveArticle(article)
            .then(res => console.log("Success"))
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container>
                <SearchForm 
                    search={this.state.search} 
                    startDate={this.state.startDate} 
                    endDate={this.state.endDate} 
                    handleInputChange={this.handleInputChange} 
                    handleFormSubmit={this.handleFormSubmit}
                />
                {this.state.articles.length ? (
                    this.state.articles.map(article => (
                        <SearchArticles
                            key={article._id}
                            title={article.headline.main}
                            url={article.web_url}
                            id={article._id}
                            onClick={() => this.saveArticle({title: article.headline.main, url: article.web_url})}
                        />
                    ))
                ) : (
                    <h2>No Articles to display yet</h2>
                )}
                
                
            </Container>
        );
    };
};

export default Articles;