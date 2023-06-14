import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { RAPID_API_URL, apiOptions } from '../../api'

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null)
  // inputa girilen ülke ismine göre bölgelerin konum bilgilerini aldığımız fonk
  const loadOptions = (inputValue) => {
    return fetch(
      `${RAPID_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      apiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            }
          }),
        }
      })
      .catch((err) => console.error(err))
  }

  // input a girilen ülke isimini ilgili state ve fonksiyonlara ileten fonk
  const handleOnChange = (searchData) => {
    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <div className="flex justify-center">
      <div className="w-96 h-full">
        <AsyncPaginate
          placeholder="Search for city"
          debounceTimeout={1000}
          value={search}
          onChange={handleOnChange}
          loadOptions={loadOptions}
          className="text-black"
        />
      </div>
    </div>
  )
}
export default Search
