const APIKey = "tJ5wkPUvxGt8X1uOK8KvWCwc7LhXVsHK"
const baseUrl = 'https://dataservice.accuweather.com/'
const getCityUrl = (cityName) => `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}&language=pt-br`
const getWeatherUrl = (cityKey) => `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br` 


const fetchdata = async (url) => {
  try {
    const response = await fetch(url)
    
    if(!response.ok) {
      throw new Error('Não foi possivel obter os dados')
    }
    return response.json()
  } catch (error) {
    alert(`${name}:${message}`)
  }
}

const getCityData = cityName => fetchdata(getCityUrl(cityName))
const getCityWeather = cityWeather => fetchdata(getWeatherUrl(cityWeather))
