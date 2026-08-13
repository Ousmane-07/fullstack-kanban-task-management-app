import './TopNav.css'
import logo from '../../../client/starter-code/assets/kanban-logo.svg'
import darkmodeLogo from '../../../client/starter-code/assets/dark-mode-logo.svg'
import threeDots from '../../../client/starter-code/assets/3dots.svg'




type TopNavProperties = { 
    isDark: boolean;
    showTaskModal: () => void;
    
}


function TopNav({isDark, showTaskModal}: TopNavProperties) { 


    return(
        <>
        <header className="top-nav-container">
            <div className="logo-section">
            {isDark ? <img src={darkmodeLogo} alt="" /> 
            : <img src={logo} alt="" />}
            </div>
            <div className="top-nav-section">
                <p>Platform Launch</p>
                <div className="top-nav-right-section">
                    <button onClick={showTaskModal}>
                        +Add New Task
                    </button>
                    <img src={threeDots} alt="" className="three-dots" />
                </div>
            </div>
        </header>
        </>
    )
}

export default TopNav