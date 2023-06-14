import { nanoid } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addInput: '',
  willTodo: {},
  addedTodos: [],
  filteredTodos: [],
  category: '',
}
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeTodo: (state, actions) => {
      state.addInput = actions.payload
    },
    // görev ekleme fonk.
    addTodo: (state) => {
      state.willTodo = {
        id: nanoid(),
        text: state.addInput,
        isCompleted: false,
      }
      state.addInput && state.addedTodos.push(state.willTodo)
      state.addInput = ''
    },
    // görevlerin completed ve active fonk.(checkbox)
    completeTodo: (state, action) => {
      const id = action.payload
      const complete = state.addedTodos.find((todo) => todo.id === id)
      complete.isCompleted = !complete.isCompleted
    },
    // görevleri silen fonk.
    removeTodo: (state, action) => {
      const id = action.payload
      const filtered = state.addedTodos.filter((todo) => todo.id !== id)
      state.addedTodos = filtered
    },
    // sınıflandırmaları için ilgili kategorinin seçilmesi
    setCategory: (state, action) => {
      state.category = action.payload
    },
    // tamamlanan görevleri silen fonk.
    removeCompleted: (state) => {
      state.addedTodos = state.addedTodos.filter((todo) => !todo.isCompleted)
    },
    // tüm görevleri active yada completed yapan fonk.
    completedAll: (state) => {
      const allTodosComplete = state.addedTodos.every(
        (item) => item.isCompleted === true
      )
      state.addedTodos.forEach((todo) => {
        todo.isCompleted = !allTodosComplete
      })
    },
  },
})

export const {
  addTodo,
  changeTodo,
  completeTodo,
  removeTodo,
  setCategory,
  removeCompleted,
  completedAll,
  getLeft,
} = todoSlice.actions
export default todoSlice.reducer
