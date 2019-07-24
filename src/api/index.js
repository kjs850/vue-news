import axios from 'axios';

const api = {
    news : 'https://api.hnpwa.com/v0/news/1.json',
    ask: 'https://api.hnpwa.com/v0/ask/1.json',
    jobs: 'https://api.hnpwa.com/v0/jobs/1.json',
    user: 'https://api.hnpwa.com/v0/user/',
    item: 'https://api.hnpwa.com/v0/item/'
};


function fetchNews() {
    return axios.get(api.news);
}

function fetchAsk() {
    return axios.get(api.ask);
}

function fetchJobs() {
    return axios.get(api.jobs);
}

function fetchUser(id) {
    return axios.get(`${api.user}${id}.json`);
}

function fetchItem(id) {
    return axios.get(`${api.item}${id}.json`);
}

export {
    fetchNews,
    fetchAsk,
    fetchJobs,
    fetchUser,
    fetchItem
}