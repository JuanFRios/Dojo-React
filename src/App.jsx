import React, { useState, useEffect } from "react"
import CountriesList from "./components/CountriesList"
import getCountries from "./services/getCountries"

function App() {

  const [input, setInput] = useState("")
  const [continent, setContinent] = useState("")
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries(continent)
      .then(data => setCountries(data))
  }, [continent])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setContinent(input)
  }


  return (
    <div>
      <p>{continent}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={input} />
        <button>Buscar</button>
      </form>
      <CountriesList countries={countries}></CountriesList>
    </div>
  )
}

export default App;