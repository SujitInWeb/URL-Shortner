import { useState } from 'react'
import './App.css'
import BackgroundAnimate from './BackgroundAnimate'
import InputShortner from './inputShortner'
import LinkResult from './LinkResult'

function App() {
   const [inputValue, setInputValue] = useState("")
  return (
     <div className='container'>
        <InputShortner setInputValue= {setInputValue}/>
        <BackgroundAnimate />
        <LinkResult inputValue={inputValue}/>
     </div>
  )
}

export default App
