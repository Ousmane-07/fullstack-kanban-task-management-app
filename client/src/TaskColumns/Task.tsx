import './Task.css'
import data from '../../../client/src/data.tsx'

type GridProperties = { 
isHidden:boolean
}


function Task({isHidden}: GridProperties) { 

    

    return ( 
    <div className={`grid-wrapper ${isHidden ? "sidebar-hidden" : ""}`}>
        <div className="grid-container">
            {data.map((column) => (
    <div className="column" key={column.id}>
        <p className="column-title">{column.name}</p>

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
        </div>
    </div>
)
}

export default Task