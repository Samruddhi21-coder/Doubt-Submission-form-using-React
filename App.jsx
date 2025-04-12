import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Motivation from './components/Motivation'
import Doubt from './components/Doubt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Doubt/>
    </>
  )
}

export default App
