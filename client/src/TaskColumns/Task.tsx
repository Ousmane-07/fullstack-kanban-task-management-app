import './Task.css'
import data from '../../../client/src/data.tsx'

type GridProperties = { 
isHidden:boolean
showModal:() => void
}


function Task({isHidden, showModal}: GridProperties) { 

    

    return ( 
    <div className={`grid-wrapper ${isHidden ? "sidebar-hidden" : ""}`}>
        <div className="grid-container">
            {data.map((column) => (
    <div className="column" key={column.id}>
        <div className="top-column-flex">
        <div className="status-circle" style={{backgroundColor: column.color}}></div><p className="column-title">{column.name} ({column.tasks.length})</p>
    </div>
        <div className="column-tasks">
            {column.tasks.map((task) => (
                <div className="task-card" key={task.id}>
                    <p>{task.title}</p>
                    <div className="sub-tasks">
                        <p>{task.completedSubtasks} of {task.totalSubtasks} subtasks</p>
                    </div>
                </div>
                
            ))}
        </div>
    </div>
))}
<div className="add-new-column-section" onClick={showModal}><p>+New Column</p></div>
        </div>
    </div>


)
}

export default Task