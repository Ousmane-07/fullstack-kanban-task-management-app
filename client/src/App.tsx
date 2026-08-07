import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar.tsx'
import TopNav from './TopNav/TopNav.tsx'
import './App.css'
import Task from './TaskColumns/Task.tsx'








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
     < TopNav isDark={isDark} />
     < Task isHidden={isHidden} />
     </div>
    </>
  )
}

export default App
