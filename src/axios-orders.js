import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://assignment-fulfilio.firebaseio.com/'
});

export default instance;