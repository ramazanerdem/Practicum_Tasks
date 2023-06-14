import { useDispatch } from 'react-redux'
import List from './List'
import { completedAll } from '../../redux/todoSlice'

const ListLayout = () => {
  const dispatch = useDispatch()
  return (
    <section className="main">
      <input
        onClick={() => dispatch(completedAll())} // girilen tüm görevleri active yada completed yapan event.
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        <List />
      </ul>
    </section>
  )
}
export default ListLayout
