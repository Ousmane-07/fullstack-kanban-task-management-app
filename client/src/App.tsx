import { useState } from 'react'
import Sidebar from './Sidebar.tsx'
import './App.css'








function App() {

   const [isDark, SetDark] = useState(false)

   function themeToggle() { 
  SetDark(!isDark)
}


  return (
    <>
     <Sidebar themeToggle={themeToggle} isDark={isDark} />
    </>
  )
}

export default App
