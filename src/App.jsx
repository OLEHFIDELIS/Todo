import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CssBaseline from "@mui/material/CssBaseline"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline/>
      <h1>Todos</h1>
    </>
  )
}

export default App
