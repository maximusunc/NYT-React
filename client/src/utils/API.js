import axios from "axios";

const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const STARTDATE = "&begin_date=";
const ENDDATE = "&end_date=";
const APIKEY = "&api-key=e215c6f07af8473aba30a72b907500a4";

export default {
    getArticles: function(query) {
        return axios.get(BASEURL + query.title + STARTDATE + query.startDate + ENDDATE + query.endDate + APIKEY);
    }
};