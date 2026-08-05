import { useState } from 'react'
import Sidebar from './Sidebar.tsx'
import './App.css'








function App() {

  // useStates 
   const [isDark, SetDark] = useState(false)
   const [isHidden, setSideBar] = useState(false)

  // Functions 

   function themeToggle() { 
  SetDark(!isDark)
}

  function hideSideBar() { 
    setSideBar(true);
  }

  function showSideBar() { 
    setSideBar(false);
  }


  return (
    <>
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
     <Sidebar themeToggle={themeToggle} isDark={isDark}
     hideSideBar={hideSideBar} showSideBar={showSideBar}
     isHidden={isHidden} />
     </div>
    </>
  )
}

export default App
