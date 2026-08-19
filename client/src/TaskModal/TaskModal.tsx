import { useState } from 'react'
import './TaskModal.css'
import exitSymbol from '../../../client/starter-code/assets/Xsymbol.svg'


type TaskModalProperties = { 
    closeTaskModal: () => void;
    isTaskModalOpen: boolean;
}



function TaskModal({closeTaskModal, isTaskModalOpen}: TaskModalProperties) { 

    // useStates

    const [subTasks, setSubTasks] = useState<string[]>([""]);
    const [subTaskError, setsubTaskError] = useState<boolean>(false)
    const [description, setDescription] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    // Functions 

    function updateSubTask(index: number, value: string) { 

        const updatedSubTasks = subTasks.map((subTask, currentIndex) => currentIndex === index ? value : subTask);
        setSubTasks(updatedSubTasks)
    }

    function addSubTask() { 
        setSubTasks([...subTasks, ""]);

    }

    function removeSubTask(index: number) { 
        const filterTasks = subTasks.filter((_, currentIndex) => currentIndex !== index);
        setSubTasks(filterTasks)
    }

    function handleCreateSubTask() { 
        if(!title.trim()) { 
            return;
        }

        if(!description.trim()) { 
            return;
        }

        const hasEmptySubTask = subTasks.some(
         (subTask) => !subTask.trim()
        );

        if(hasEmptySubTask) {
        setsubTaskError(true);
             return;
    }

    setsubTaskError(false)

    }



    if(!isTaskModalOpen) { 
        return null;
    }

    return( 
        <>
        <div className="task-modal-wrapper" onClick={closeTaskModal}>
            <div className="task-modal-window"  onClick={(event) => event.stopPropagation()}>
                <p className="task-modal-header">Add New Task</p>
                <div className="task-title-input">
                    <p>Title</p>
                    <input type="text" placeholder="e.g Take coffee break" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="task-description-input">
                    <p>Description</p>
                    <input type="text" placeholder="e.g. it's always good to take a break.
                     This 15 minute break will recharge the batteries a little." value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="task-substasks-section">
                    <p className="subtasks-header">Subtasks</p>
                  {subTasks.map((subTask: string, index: number) => ( 
                    <div className="column-input" key={index}>
                        <input type="text" value={subTask} className={subTaskError && !subTask.trim() ? "error" : ""} onChange={(e) => updateSubTask(index, e.target.value)} />

                    <img src={exitSymbol} alt="" onClick={() => removeSubTask(index)} />
                    </div>)
                )} 
                    <div className="task-modal-new-task">
                        <button onClick={addSubTask}>+Add New Subtask</button>
                    </div>
                    <div className="task-modal-status-section">
                        <p>Status</p>
                        <div className="status-container">
                            <p>Todo</p>
                        </div>
                    </div>
                    <div className="task-modal-create-task-btn">
                        <button onClick={handleCreateSubTask }>Create Task</button>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}

export default TaskModal

