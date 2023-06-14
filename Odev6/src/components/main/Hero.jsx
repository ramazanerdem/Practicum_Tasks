import { useDispatch, useSelector } from 'react-redux'
import { fetchHeroes, setModal, showModal } from '../../redux/heroSlice'
import { useEffect } from 'react'

const Hero = () => {
  const dispatch = useDispatch()
  const char = useSelector((store) => store.heroes.filteredChar)
  const isLoading = useSelector((store) => store.heroes.isLoading)
  const handleDetail = (id) => {
    dispatch(setModal(true))
    dispatch(showModal(id))
  }
  useEffect(() => {
    dispatch(fetchHeroes())
  }, [])

  if (isLoading) {
    return (
      <>
        <p className="text-2xl">Loading...</p>
      </>
    )
  }

  return (
    <>
      {char?.map((hero) => (
        <div
          key={hero.id}
          className="bg-black p-3 bg-opacity-30 shadow-2xl rounded-lg flex flex-col items-center hover:scale-95 transition-all duration-500"
        >
          <div className="rounded-xl overflow-hidden border-4 border-black shadow-xl">
            <img src={hero.images?.sm} alt={hero.name} />
          </div>
          <button onClick={() => handleDetail(hero.id)}>Details</button>
          <hr className="w-20 h-0.5 bg-black bg-opacity-50" />
          <p>{hero.name}</p>
          <p>{hero.biography?.publisher}</p>
        </div>
      ))}
    </>
  )
}
export default Hero
