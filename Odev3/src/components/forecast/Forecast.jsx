import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion'

const DAYS = [
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi',
  'Pazar',
]
// haftalık hava durumu verilerini ekrana yazdırdığımız comp
const Forecast = ({ forecast }) => {
  const iconUrl = 'http://openweathermap.org/img/w'

  // her günün verisiyle DAYS te tanımladığımız günlerin eşleştirip ilgili fünü yazdırdığımız kısım
  const dayInWeek = new Date().getDay()
  const forecastDays = DAYS.slice(dayInWeek, DAYS.length).concat(
    DAYS.slice(0, dayInWeek)
  )

  return (
    <>
      {/* Accordion oluşturmak için hazır npm paketi kullanarak accoridon yapısı oluşturduğumuz ve ilgili api verilerini ilgili dom lara ilettiğimiz kısım */}
      <Accordion
        allowZeroExpanded
        className="bg-black bg-opacity-30 flex flex-col gap-10 p-10 rounded-2xl"
      >
        <div className="text-3xl font-bold bg-red-500 bg-opacity-50 px-5 py-3 rounded-xl">
          <p>Haftalık</p>
        </div>
        {forecast.list.splice(0, 7).map((item, index) => (
          <AccordionItem
            key={index}
            className="bg-black bg-opacity-30 rounded-lg p-5 flex flex-col gap-10"
          >
            <AccordionItemHeading className="">
              <AccordionItemButton>
                <div className="flex items-center justify-between">
                  <label className="font-semibold text-2xl w-32">
                    {forecastDays[index]}
                  </label>
                  <div className="flex items-center">
                    <img
                      src={`${iconUrl}/${item.weather[0].icon}.png`}
                      alt="weather"
                    />
                    <label>{item.weather[0].description}</label>
                  </div>
                  <label>
                    <p>En Yüksek: {Math.round(item.main.temp_max)}°C</p>
                    <p>En Düşük: {Math.round(item.main.temp_min)}°C</p>
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="flex gap-40">
                <div className="h-full w-1/2 flex flex-col justify-between">
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">
                      Hissedilen
                    </span>
                    <span>{Math.round(item.main.feels_like)} °C</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">Rüzgar</span>
                    <span>{item.wind.speed.toFixed(1)} m/s</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">Nem</span>
                    <span>{item.main.humidity} %</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">Basınç</span>
                    <span>{item.main.pressure.toFixed(0)} hPa</span>
                  </div>
                </div>
                <div className="h-full w-1/2 flex flex-col justify-between">
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">
                      DS Hava Basıncı
                    </span>
                    <span>{item.main.sea_level} hPa</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">Bulut</span>
                    <span>{item.clouds.all} %</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">
                      En Yüksek
                    </span>
                    <span>{item.main.temp_max.toFixed(1)} °C</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span className="text-white text-opacity-50">En Düşük</span>
                    <span>{item.main.temp_min.toFixed(1)} °C</span>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
export default Forecast
