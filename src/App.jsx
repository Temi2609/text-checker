import { Component, useState } from "react";
import Length from "./components/Length";
import './App.css'

function App() {

  const [Input, setInput] = useState('')

  function inputChange(e) {
    setInput(e.target.value)
  }

  return(
    <>
      <div id="parent">
        <h2>Text Length Checker</h2>
        <input onChange={inputChange} type="text" />
        <Length length = {Input.length}></Length>
        
      </div>

    </>
  )

}




export default App;