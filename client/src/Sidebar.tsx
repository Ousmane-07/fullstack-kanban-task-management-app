import './Sidebar.css'
import logo from '../../client/starter-code/assets/kanban-logo.svg'
import BoardIcon from '../../client/starter-code/assets/icon-board.svg?react'
import sun from '../../client/starter-code/assets/icon-light-theme.svg'
import moon from '../../client/starter-code/assets/icon-dark-theme.svg'
import eyeslash from '../../client/starter-code/assets/icon-hide-sidebar.svg'


type themeProperties = { 
    themeToggle: () => void;
    isDark: boolean;
}

function Sidebar({themeToggle, isDark}: themeProperties) { 


    return ( 
        <>
        <div className="sidebar-container">
            <img src={logo} className="kanban-logo" alt="" />
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
                    <div className="toggle-container">
                        <div className={`toggle-button ${isDark ? "isDark" : "" }`} onClick={themeToggle}></div>
                    </div>
                    <img src={moon} alt="" />
                </div>
                <div className="hide-sidebar-button">
                    <img src={eyeslash} alt="" />
                    <p>Hide Sidebar</p>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Sidebar