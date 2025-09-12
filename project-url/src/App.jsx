import './App.css'
import BackgroundAnimate from './BackgroundAnimate'
import InputShortner from './inputShortner'
import LinkResult from './LinkResult'

function App() {

  return (
     <div className='container'>
        <InputShortner/>
        <BackgroundAnimate />
        <LinkResult/>
     </div>
  )
}

export default App
