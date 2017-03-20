const BASE_URL = 'https://www.metaweather.com/api/location';

export const getWeather = city => {
  return fetch(`${BASE_URL}/search/?query=${city}`)
    .then(response => response.json())
    .then(results => fetch(`${BASE_URL}/${results[0].woeid}`))
    .then(response => response.json())
}
