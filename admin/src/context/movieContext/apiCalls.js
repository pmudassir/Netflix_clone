import { getMoviesFailure, getMoviesStart } from "./MovieActions"
import axios from "axios"

const getMovies = async (dispatch) => {
    getMoviesStart()
    try {
        const res = await axios.get("/movies", {headers: {token: "Bearer " + localStorage.getItem("user")}})
    } catch (error) {
        getMoviesFailure(error)
    }
} 