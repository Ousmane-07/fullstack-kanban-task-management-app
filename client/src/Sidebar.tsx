import './Sidebar.css'
import logo from '../../client/starter-code/assets/kanban-logo.svg'
import BoardIcon from '../../client/starter-code/assets/icon-board.svg?react'
import sun from '../../client/starter-code/assets/icon-light-theme.svg'
import moon from '../../client/starter-code/assets/icon-dark-theme.svg'
import eyeslash from '../../client/starter-code/assets/icon-hide-sidebar.svg'
import darkmodeLogo from '../../client/starter-code/assets/dark-mode-logo.svg'
import revealSideBar from '../../client/starter-code/assets/show-sidebar.svg'


type SideBarProperties = { 
    isDark: boolean;
    isHidden: boolean;
    themeToggle: () => void;
    hideSideBar: () => void;
    showSideBar: () => void;
    
}



function Sidebar({themeToggle, isDark, hideSideBar, showSideBar, isHidden}: SideBarProperties) { 


    return ( 
        <>
        <div className={isHidden ? "hidden" : "sidebar-container"}>
            {isDark ? <img src={darkmodeLogo} className="kanban-logo" alt="" /> 
            : <img src={logo} className="kanban-logo" alt="" />}
            <div className="sidebar-container-flex">
                <div className="sidebar-top-section">
                    <p className="all-boards-header">ALL BOARDS (3)</p>
                    <div className="list-container">
                        <BoardIcon />
                        <p>Platform Launch</p>
                    </div>
                    <div className="list-container">
                        <BoardIcon />
                        <p>Marketing Plan</p>
                    </div>
                    <div className="list-container">
                        <BoardIcon />
                        <p>Roadmap</p>
                    </div>
                    <div className="list-container">
                        <BoardIcon />
                        <p>+ Create New Board</p>
                    </div>
                </div>
                <div className="sidebar-bottom-section">
                <div className="theme-toggle-container">
                    <img src={sun} alt="" />
                    <div className="toggle-container" onClick={themeToggle}>
                        <div className={`toggle-button ${isDark ? 'isDark' : ''}`} ></div>
                    </div>
                    <img src={moon} alt="" />
                </div>
                <div className="hide-sidebar-button" onClick={hideSideBar}>
                    <img src={eyeslash} alt="" />
                    <p className="hide-sidebar-text">Hide Sidebar</p>
                    </div>
                </div>

            </div>
        </div>
         {isHidden && (
        <button
          type="button"
          className="show-sidebar-button"
          onClick={showSideBar}
          aria-label="Show sidebar"
        >
          <img src={revealSideBar} alt="" />
        </button>
      )}
        </>
    )
}

export default Sidebar