import Axios from 'axios';

const baseURL = '/';

const instance = Axios.create({
    baseURL,
    timeout: 10000
});

export const getSeries = () => {
    return instance.get('/series')
};

export const getDetail = (title) => {
    return instance.get(`/series/${title}`)
}

export const postSeries = (payload) => {
    return instance.post('/series', payload)
};