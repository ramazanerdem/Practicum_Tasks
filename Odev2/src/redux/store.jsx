import { configureStore } from '@reduxjs/toolkit'

//slice
import todoSlice from './todoSlice'

const store = configureStore({
  reducer: {
    todos: todoSlice,
  },
})

export default store
