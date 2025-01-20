import axios  from "axios";
const BASE_URL ="https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhN2E4YWU0OTc1M2JjMTE0NzYxYzI4OGEyNmE1ZmYzNCIsInN1YiI6IjY0YjY0ZDNkZTBjYTdmMDEwNjk4ZjdlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYoDupqrAFJzxnHZu6-8lNYXAozGmLjTTLMLJPILfi8"

const headers = {
    Authorization:"bearer " + TMDB_TOKEN,
}
export const fetchDataFromApi = async (url, params) => {
    try {
    const {data} = await axios.get(BASE_URL +url,{
        headers,
        params
    })
    return data;
} catch (err) {
    console.log(err);
    return err;
}

}
