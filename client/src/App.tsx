import { useState } from 'react'
import Sidebar from './Sidebar/Sidebar.tsx'
import TopNav from './TopNav/TopNav.tsx'
import './App.css'
import Task from './TaskColumns/Task.tsx'
import BoardModal from './BoardModal/BoardModal.tsx'







function App() {

  // useStates 

   const [isDark, SetDark] = useState<boolean>(false)
   const [isHidden, setSideBar] = useState<boolean>(false)
   const [isOpen, setOpen] = useState<boolean>(false)
  const [isTaskModalOpen, setTaskModalOpen] = useState<boolean>(false)
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

function showTaskModal() { 
  setTaskModalOpen(true);
}

function closeTaskModal() { 
  setTaskModalOpen(false);
}

  return (
    <>
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
     <Sidebar themeToggle={themeToggle} isDark={isDark}
     hideSideBar={hideSideBar} showSideBar={showSideBar}
     isHidden={isHidden} />
     < TopNav isDark={isDark} showTaskModal={showTaskModal} />
     < Task isHidden={isHidden} showModal={showModal} />
     < BoardModal isOpen={isOpen} closeModal={closeModal}  / >
     </div>
    </>
  )
}

export default App
