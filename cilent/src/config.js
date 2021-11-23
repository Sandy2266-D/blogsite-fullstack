import axios from "axios"
export const axiosInstance = axios.create({
    baseURL: "https://sandy-blogsite.herokuapp.com/api/"
})