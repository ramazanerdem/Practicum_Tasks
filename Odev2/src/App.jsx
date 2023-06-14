import { useState } from 'react'
import './App.css'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import ListLayout from './components/List/ListLayout'

//redux
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <section className="todoapp">
        <Header />
        <ListLayout />
        <Footer />
      </section>
    </Provider>
  )
}

export default App
