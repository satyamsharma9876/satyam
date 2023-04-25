import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pic from "../src/assets/Profile pic.jpg"
function App() {
  const [count, setCount] = useState(0)

 return (
  <>
  <img src={pic}/>
  <h1>Satyam Sharma</h1>
  <p>I am an Engineering Student</p>
  </>

 )
}

export default App
