import { useDispatch, useSelector } from 'react-redux'

//reducer
import { addTodo, changeTodo } from '../redux/todoSlice'

const Header = () => {
  const dispatch = useDispatch()

  // input alanına girilen görevi redux store dan çeken hook
  const text = useSelector((state) => state.todos.addInput)

  const handleChange = (e) => {
    dispatch(changeTodo(e.target.value))
  }

  // form submit olduğunda ilgili görevi listeye push eden fonk.
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addTodo())
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleChange(e)}
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={text}
        />
      </form>
    </header>
  )
}

export default Header
