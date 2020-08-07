import axios from 'axios';

const KEY = 'AIzaSyCX4xEWlO6Ltu3fi6vwcGd73WmrKC2tHhs';

export default axios.create ({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});