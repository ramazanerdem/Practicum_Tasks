import Modal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../../redux/heroSlice'

Modal.setAppElement('#root')

const ModalLayout = () => {
  const dispatch = useDispatch()
  const modalIsOpen = useSelector((store) => store.heroes.modalIsOpen)
  const modalChar = useSelector((store) => store.heroes.modalChar)

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => dispatch(setModal(false))}
      className="Modal w-1/3 mx-auto mt-36 bg-black bg-opacity-50 px-10 py-8 shadow-2xl rounded-2xl text-white"
    >
      <div className="grid grid-cols-2">
        <div className="w-48 border-8 border-black border-opacity-75 rounded-xl overflow-hidden shadow-2xl">
          <img
            className="w-full animate-pulse"
            src={modalChar.images?.sm}
            alt={modalChar.name}
          />
        </div>

        <div className="bg-black bg-opacity-50 px-3 flex flex-col justify-center rounded-xl shadow-2xl">
          <h2 className="text-lg font-bold mb-4">{modalChar.name}</h2>
          <p className="mb-4">Strength: {modalChar.powerstats?.strength}</p>
          <p className="mb-4">Speed: {modalChar.powerstats?.speed}</p>
          <p className="mb-4">Durability: {modalChar.powerstats?.durability}</p>
          <p className="mb-4">Power: {modalChar.powerstats?.power}</p>
          <button
            onClick={() => dispatch(setModal(false))}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </div>
      </div>
      <h3 className="font-bold mt-3 text-lg text-red-200">Group Affiliation</h3>
      <p className="mt-5">{modalChar.connections?.groupAffiliation}</p>
    </Modal>
  )
}
export default ModalLayout
