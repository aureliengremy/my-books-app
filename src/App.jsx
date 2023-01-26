import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddBooks from './containers/AddBooks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App flex-wrapper">
      <Navbar />
      <AddBooks/>
      <Footer/>
    </div>
  )
}

export default App
