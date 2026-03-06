import axios from 'axios';
const URL = 'http://localhost:3000/food';

const getAll = async() =>{
    return axios.get(`${URL}`);
}

const create = async (data) =>{
    return await axios.post(`${URL}'/create'`, data);
}

export default { getAll, create }