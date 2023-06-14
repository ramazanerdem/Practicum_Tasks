import { useDispatch, useSelector } from 'react-redux'
import { removeCompleted, setCategory } from '../redux/todoSlice'
import { useEffect, useState } from 'react'

const Footer = () => {
  const dispatch = useDispatch()
  const [content, setContent] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])

  const todos = useSelector((state) => state.todos.addedTodos)

  // girilen görevlerin sayısını her görev eklendiğinde güncellemek için kullanılan effeck hook u
  useEffect(() => {
    const filteredTodos = todos.filter((todo) => !todo.isComplated)
    setIncompleteTodos(filteredTodos)
  }, [todos])

  // görev sayısını belirlemek için active görevlerin bulunduğu array in uzunluğunun hesaplanması
  const value = incompleteTodos.length
  const filteredClick = (e) => {
    e.preventDefault()
    const text = e.target.textContent
    dispatch(setCategory(text))
    setContent(text)
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{value} </strong>
        {value > 1 ? 'items' : 'item'} left
      </span>

      <ul className="filters">
        <li>
          <a
            onClick={(e) => filteredClick(e)}
            href="#"
            className={content === 'All' ? 'selected' : ''}
          >
            All
          </a>
        </li>
        <li>
          <a
            onClick={(e) => filteredClick(e)}
            href="#"
            className={content === 'Active' ? 'selected' : ''}
          >
            Active
          </a>
        </li>
        <li>
          <a
            onClick={(e) => filteredClick(e)}
            href="#"
            className={content === 'Completed' ? 'selected' : ''}
          >
            Completed
          </a>
        </li>
      </ul>

      <button
        onClick={() => dispatch(removeCompleted())}
        className="clear-completed"
      >
        Clear completed
      </button>
    </footer>
  )
}
export default Footer
