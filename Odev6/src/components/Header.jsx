import { BsFillSearchHeartFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { getFiltering, setInputChange } from '../redux/heroSlice'
import { useState } from 'react'

const Header = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setInputChange(input))
    dispatch(getFiltering())
    setInput('')
  }
  const handleChange = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="bg-red-400 w-full h-12 px-10 flex items-center justify-center md:justify-between">
      <h3 className="hidden md:block font-bold font-mono text-2xl tracking-wider w-32">
        SuperHero.Book
      </h3>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex items-center justify-center bg-white rounded-md"
      >
        <div className="flex items-center justify-center px-3">
          <input
            onChange={(e) => handleChange(e)}
            className="outline-none"
            type="text"
            value={input}
          />
          <button type="submit" className="group">
            <BsFillSearchHeartFill className="text-black group-active:text-orange-400" />
          </button>
        </div>
      </form>
      <button className="hidden md:block font-semibold w-32"></button>
    </div>
  )
}
export default Header
