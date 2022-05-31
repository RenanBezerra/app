import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:3000', 
    //'http://localhost:3000',
    // 'http://10.0.2.2:3000', emulador
    // 'http://172.30.112.1:3000', device endereço ip do roteador
})

export default api;