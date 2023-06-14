import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const API_KEY = import.meta.env.VITE_REACT_RAPID_API_KEY
export const fetchHeroes = createAsyncThunk('book/fetchHeroes', async () => {
  const options = {
    method: 'GET',
    url: 'https://superhero-search.p.rapidapi.com/api/heroes',
    headers: {
      'X-RapidAPI-Key': API_KEY,
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  }
  // const res = await axios.request(options)
  // console.log(res.data)
  // return res.data
  try {
    const res = await axios.request(options)
    console.log(res.data)
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue('sorun var')
  }
})

const initialState = {
  modalIsOpen: false,
  // heroes: char,
  heroes: [],
  inputValue: '',
  isLoading: true,
  filteredChar: [],
  modalChar: {},
}
export const heroSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setModal: (state, actions) => {
      const isModal = actions.payload
      state.modalIsOpen = isModal
    },
    setInputChange: (state, actions) => {
      state.inputValue = actions.payload
    },
    getFiltering: (state) => {
      const filtered = state.heroes.filter((hero) =>
        hero.name.toLowerCase().includes(state.inputValue.toLowerCase())
      )
      state.inputValue === ''
        ? (state.filteredChar = [])
        : (state.filteredChar = filtered)

      state.inputValue = ''
    },
    showModal: (state, action) => {
      const id = action.payload
      const filtered = state.filteredChar.filter((hero) => hero.id === id)
      state.modalChar = filtered[0]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeroes.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchHeroes.fulfilled, (state, action) => {
      state.isLoading = false
      state.heroes = action.payload
    })
    builder.addCase(fetchHeroes.rejected, (state, action) => {
      state.isLoading = false
    })
  },
})

export const { setModal, setInputChange, getFiltering, showModal } =
  heroSlice.actions
export default heroSlice.reducer
