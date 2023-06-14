import './App.css'
import { useState } from 'react'
// comp
import Search from './components/search/Search'
import CurrentWeather from './components/current/currentWeather'
import Forecast from './components/forecast/Forecast'
// api
import { WEATHER_API_URL } from './api'
const WEATHER_API_KEY = import.meta.env.VITE_REACT_WEATHER_API_KEY

function App() {
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ')

    // url üzerine girilen ilgili enlem ve boylam bilgilerine göre anlık hava durumu dinamik fetch url si
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    // hava tahmin dinamik fetch url si
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    )
    // 2 işlemi tek promise altında sırayla çekip state lere gönderiyoruz
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (res) => {
        const weatherRes = await res[0].json()
        const forecastRes = await res[1].json()

        setCurrentWeather({ ...weatherRes, city: searchData.label })
        setForecast({ ...forecastRes, city: searchData.label })
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="container max-w-5xl my-5 mx-auto flex flex-col gap-10">
      {/* Şehirler araması yaptığımız search comp */}
      <Search onSearchChange={handleOnSearchChange} />

      {/* currentWeather verisi varsa ekrana günlük hava durumu verilerini yazdırdığımız comp */}
      {currentWeather && <CurrentWeather currentWeather={currentWeather} />}

      {/* haftanın günlerini bölerek her güne ait verileri ekrana yazdırdığımız comp */}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  )
}

export default App
