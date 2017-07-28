import axios from 'axios'
const API_URL = 'https://sandcastles-server.herokuapp.com/api/v1/sandcastles';
const POST_URL = 'https://sandcastles-server.herokuapp.com/api/v1/sandcastles';

export const getSandcastles = () => {
    return axios.get(API_URL)
  }
export const addSandcastle = (data) => {
  return axios.post(POST_URL, data)
}
