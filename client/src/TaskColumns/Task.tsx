import './Task.css'

type GridProperties = { 
isHidden:boolean
}


function Task({isHidden}: GridProperties) { 


    return ( 
        <div className={`grid-wrapper ${isHidden ? "sidebar-hidden" : ""}`}>
            <div className="grid-container">
            <h1>Hello</h1>
            </div>
        </div>
    )
}

export default Task 