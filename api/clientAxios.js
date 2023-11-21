import axios from 'axios'

const clientAxios = axios.create({
    baseURL: "http://192.168.0.180:5234/api/",
})


export default clientAxios