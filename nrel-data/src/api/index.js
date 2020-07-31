import axios from 'axios'

const { REACT_APP_NREL_API_KEY, REACT_APP_BASE_URL } = process.env

const axiosConfig = {
    // baseURL: REACT_APP_BASE_URL,
}
// console.log( REACT_APP_BASE_URL)
const requestWithAuth = () => {
    const instance = axios.create({
        ...axiosConfig,
        headers: {
            'X-Api-Key': `${REACT_APP_NREL_API_KEY}`,
            // 'Content-Type': 'application/json'
        }
    })
    return instance
}

export const getSolarData = async coord => {
    const { data } = await requestWithAuth()
        .get('api/solar/solar_resource/v1.json/', {
            params: {
                lat: coord.lat, 
                lon: coord.lon 
            }
        })
    console.log(data)
    return data
}


let temp = {
    lat: 40,
    lon: -105
}
getSolarData(temp)