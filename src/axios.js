import axios from 'axios'


const instance = axios.create({
    // The API (cloud function) URL
    baseURL: 'https://us-central1-clone-7d2a4.cloudfunctions.net/api',
    // 'http://localhost:5001/clone-7d2a4/us-central1/api' // localhost
})

export default instance