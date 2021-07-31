const input = document.querySelector('input');
const form = document.querySelector('[data-js="card-weather"]')
const city = document.querySelector('[data-js="city-name"]')
const weather = document.querySelector('[data-js="city-weather"]')
const temperature = document.querySelector('[data-js="city-temperature"]')
const weatherIcon = document.querySelector('[data-js="weather-icon"]')
const ilustrator = document.querySelector('[data-js="weather-img"]')
const card = document.querySelector('[data-js="card"]')

form.addEventListener('submit', e => {
  e.preventDefault()
  console.log(localStorage.getItem('cityName'));
  const inputValue = e.target.search.value.trim()
  if(inputValue){
    GetAndSetWeather(inputValue)
  }
  form.reset()
})

const GetAndSetWeather = async (inputValue)=> {
  const [{Key, LocalizedName}] = await getCityData(inputValue)
  const [{IsDayTime, WeatherIcon, WeatherText, Temperature}] = await getCityWeather(Key);
  localStorage.setItem('cityName', LocalizedName)

  city.textContent = LocalizedName
  weather.textContent = WeatherText
  temperature.textContent = Temperature.Metric.Value
  weatherIcon.setAttribute('src', `./src/icons/${WeatherIcon}.svg`)
  IsDayTime ? ilustrator.setAttribute('src', `./src/day.png`) : ilustrator.setAttribute('src', `./src/night.png`)
  card.classList.remove('hidden')
}

const cityName = localStorage.getItem('cityName')
cityName ? GetAndSetWeather(cityName) : cityName = ''

