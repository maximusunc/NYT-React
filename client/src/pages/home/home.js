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
        if (this.state.startDate && this.state.endDate) {
            const regex = /^(19|20)\d\d(0[1-9]|1[012])(0[1-9]|[12][0-9]|3[01])$/;
            const validStart = regex.exec(this.state.startDate);
            const validEnd = regex.exec(this.state.endDate);
            if (!validStart || !validEnd) {
                alert("Please enter dates in the correct format");
                return;
            };
        };
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
        const { history } = this.props;
        API.saveArticle(article)
            .then(res => history.push("/saved"))
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
                    <h2 className="text-center">No Articles to display yet</h2>
                )}
                
                
            </Container>
        );
    };
};

export default Articles;