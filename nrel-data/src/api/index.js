import axios from 'axios'

const { REACT_NREL_API_KEY, REACT_BASE_URL } = process.env

const axiosConfig = {
    baseURL: REACT_BASE_URL
}

const requestWithAuth = () => {
    const instance = axios.create({
        ...axiosConfig,
        headers: {'X-Api-Key': `${REACT_NREL_API_KEY}`}
    })
    return instance
}

export const getSolarData = async coord => {
    const { data } = await requestWithAuth().get('/api/solar/solar_resource/v1.json', {coord})
    console.log(data)
    return data
}