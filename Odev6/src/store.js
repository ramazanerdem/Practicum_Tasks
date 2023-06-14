import { configureStore } from '@reduxjs/toolkit'
import heroReducer from './redux/heroSlice'

export const store = configureStore({
  reducer: {
    heroes: heroReducer,
  },
})
