import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar.tsx'
import TopNav from './TopNav/TopNav.tsx'
import './App.css'
import Task from './TaskColumns/Task.tsx'
import Modal from './TaskModal/TaskModal.tsx'







function App() {

  // useStates 

   const [isDark, SetDark] = useState<boolean>(false)
   const [isHidden, setSideBar] = useState<boolean>(false)
  const [isOpen, setOpen] = useState<boolean>(false)


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

  function showModal() { 
  setOpen(true)
}

  function closeModal() { 
  setOpen(false)
}

  return (
    <>
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
     <Sidebar themeToggle={themeToggle} isDark={isDark}
     hideSideBar={hideSideBar} showSideBar={showSideBar}
     isHidden={isHidden} />
     < TopNav isDark={isDark} />
     < Task isHidden={isHidden} showModal={showModal} />
     < Modal isOpen={isOpen} closeModal={closeModal}  / >
     </div>
    </>
  )
}

export default App
