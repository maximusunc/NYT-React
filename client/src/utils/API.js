import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const STARTDATE = "&begin_date=";
const ENDDATE = "&end_date=";
const APIKEY = "&api-key=e215c6f07af8473aba30a72b907500a4";

export default {
    // performs the API request
    getArticles: function(query) {
        if (query.startDate && query.endDate) {
            return axios.get(BASEURL + query.search + STARTDATE + query.startDate + ENDDATE + query.endDate + APIKEY);
        } else {
            return axios.get(BASEURL + query.search + APIKEY);
        }
    },
    // loads the saved articles from the database
    loadSaved: function() {
        return axios.get("/api/articles");
    },
    // saves an article to the database
    saveArticle: function(article) {
        return axios.post("/api/articles", article);
    },
    // deletes an article from the database
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    }
};