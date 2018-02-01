import React, {Component} from "react";
import API from "../../utils/API.js";
import Container from "../../components/container";
import SavedArticles from "../../components/savedArticles";

class Saved extends Component {
    state = {
        savedArticles: []
    };

    componentDidMount() {
        this.loadArticles();
    };

    loadArticles = () => {
        API.loadSaved()
            .then(res => this.setState({savedArticles: res.data}))
            .catch(err => console.log(err));
    };

    handleDelete = (id) => {
        API.deleteArticle(id)
            .then(res => this.loadArticles())
            .catch(err => console.log(err));
    };


    render() {
        return (
            <Container>
                <h1>Saved</h1>
                {this.state.savedArticles.length ? (
                    this.state.savedArticles.map(article => (
                        <SavedArticles 
                            key={article._id}
                            title={article.title}
                            url={article.url}
                            id={article._id}
                            handleDelete={this.handleDelete}
                        />
                    ))
                ) : (
                    <h2>You have no saved articles</h2>
                )}
                
            </Container>
        )
    };
};

export default Saved;