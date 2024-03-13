import { useState } from 'react'
import Main from './View/Main'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './css/style.css'
import AddPlayer from './components/AddPlayer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <BrowserRouter>
            <Routes>
	          <Route element={<Main/>} path="/home" default /> 
            <Route element={<AddPlayer></AddPlayer>} path='/player/addplayer'></Route>
            </Routes>
    	</BrowserRouter>
      
     
    </>
  )
}

export default App
