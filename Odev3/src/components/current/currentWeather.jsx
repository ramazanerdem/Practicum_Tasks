// anlık hava durumu verilerini ekrana yazdırdığımız comp
const CurrentWeather = ({ currentWeather }) => {
  const iconUrl = 'http://openweathermap.org/img/w'

  return (
    <section className="mt-10 grid grid-cols-3 gap-5 p-10 bg-black bg-opacity-30 shadow-2xl rounded-2xl">
      <article className="tracking-wide shadow-2xl col-span-1 bg-black bg-opacity-50 p-8 rounded-2xl flex flex-col items-center text-center">
        <img
          className="w-28 animate-pulse"
          src={`${iconUrl}/${currentWeather.weather[0].icon}.png`}
          alt="weather"
        />
        <div className="">
          <p className="text-6xl font-bold mt-2">
            {Math.round(currentWeather.main.temp)}°C
          </p>
          <p className="text-xl font-semibold">
            {currentWeather.weather[0].description}
          </p>
          <p className="text-3xl font-bold mt-3">{currentWeather.city}</p>
        </div>
      </article>
      <article className="flex flex-col justify-between gap-10 shadow-2xl col-span-2 bg-black bg-opacity-50 p-8 rounded-2xl text-2xl ">
        <div className="text-3xl font-bold bg-blue-500 bg-opacity-30 px-5 py-3 rounded-xl">
          <p>Hava Detayı</p>
        </div>
        <div className="flex gap-10">
          <div className="h-full w-1/2 flex flex-col gap-4 justify-between">
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">Hissedilen</span>
              <span>{Math.round(currentWeather.main.feels_like)}°C</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">Rüzgar</span>
              <span>{currentWeather.wind.speed.toFixed(1)} m/s</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">Nem</span>
              <span>{currentWeather.main.humidity}%</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">Basınç</span>
              <span>{currentWeather.main.pressure.toFixed(0)} hPa</span>
            </div>
          </div>
          <div className="h-full w-1/2 flex flex-col justify-between">
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">Semt</span>
              <span>{currentWeather.name}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">Ülke</span>
              <span>{currentWeather.sys.country}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">En Yüksek</span>
              <span>{currentWeather.main.temp_max.toFixed(1)} °C</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-white text-opacity-50">En Düşük</span>
              <span>{currentWeather.main.temp_min.toFixed(1)} °C</span>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}
export default CurrentWeather
