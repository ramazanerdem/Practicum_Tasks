import { useDispatch, useSelector } from 'react-redux'
import { completeTodo, removeTodo } from '../../redux/todoSlice'

const List = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.addedTodos)
  const category = useSelector((state) => state.todos.category)

  // ilgili görevin tamamlandı olarak işaretleyen işlem
  const handleCompleted = (id) => {
    dispatch(completeTodo(id))
  }
  // listelenen görevlerin active yada complete olanları tutup, tıklanana listeleyen filtreleme işlemi
  let filteredTodos = todos
  filteredTodos = todos.filter((todo) =>
    category == 'Active'
      ? !todo.isCompleted
      : category == 'Completed'
      ? todo.isCompleted
      : todos
  )

  return (
    <>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className={todo.isCompleted ? 'completed' : ''}>
          <div className="view">
            <input
              onClick={() => handleCompleted(todo.id)}
              className="toggle"
              type="checkbox"
              checked={todo.isCompleted}
              readOnly
            />
            <label>{todo.text}</label>
            <button
              onClick={() => dispatch(removeTodo(todo.id))} // tıklanan görevi silen fonk.
              className="destroy"
            ></button>
          </div>
        </li>
      ))}
    </>
  )
}
export default List
