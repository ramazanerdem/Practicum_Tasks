import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
// comp
import App from './App'

// header render testi
test('Header rendered', () => {
  render(<App />)
  const title = screen.getByText('Emoji Search')
  expect(title).toBeInTheDocument()
})

// bütün emojilerin "Click to copy emoji" text'ine sahip olup olmadığı testi
test('Emoji list rendered successfully', () => {
  render(<App />)
  const emojis = screen.getAllByText('Click to copy emoji')
  expect(emojis.length).toEqual(20)
})
// filtrelenen emojilerin yeniden render edildiğini gösteren test
test('Filtered emojis re-rendered successfully', () => {
  render(<App />)
  const emoji = 'Joy'
  const inputValue = screen.getByRole('textbox')
  fireEvent.change(inputValue, { target: { value: emoji } })

  expect(screen.getByText(emoji)).toBeInTheDocument()
})

// emojilerin kopyalanıp kopyalanmadığını kontrol eden test
test('Clicked emojis copied successfully', () => {
  render(<App />)
  const clicked = screen.getAllByText('Click to copy emoji').at(0)
  const parent = clicked.parentElement
  expect(parent.getAttribute('data-clipboard-text').length).toBeGreaterThan(0)
})
