import axios from 'axios';

const api = axios.api({
    baseURL:"https://viacep.com.br/ws/"
});
export default api;