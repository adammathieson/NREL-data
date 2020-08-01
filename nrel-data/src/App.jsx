import React from 'react'
import logo from './logo.svg'
import './App.css'

import LocationSearch from './components/LocationSearch'

function App() {
  return (
    <div className="App">
      <h1>NREL Data Visualization</h1>
      <img className="App-logo" src={logo} alt="Solar Chart Logo"></img>
      <LocationSearch />
    </div>
  )
}

export default App
