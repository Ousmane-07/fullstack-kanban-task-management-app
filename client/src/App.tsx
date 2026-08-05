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
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
     <Sidebar themeToggle={themeToggle} isDark={isDark} />
     </div>
    </>
  )
}

export default App
