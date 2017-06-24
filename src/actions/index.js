import axios from 'axios';

const API_KEY = 'b7ecfba7f1c0a045c28a43f069a31791'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
