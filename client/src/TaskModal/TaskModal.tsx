import { useState } from 'react'
import './TaskModal.css'
import exitSymbol from '../../../client/starter-code/assets/Xsymbol.svg'



type ModalProperties = { 
    isOpen: boolean
    closeModal: () => void;
}

function Modal({isOpen, closeModal} : ModalProperties) { 

const [name, setName] = useState<string>("")
const [error, setError] = useState<boolean>(false)
    
    function handleCreateBoard() {
  if (!name.trim()) {
    setError(true);
    return;
  }

  setError(false);
}


    if (!isOpen) { 
        return null;
    }

    return ( 
        <div className="modal-wrapper" onClick={closeModal}>
            <div className="modal-window"  onClick={(event) => event.stopPropagation()}>
                <p className="modal-header">Add New Board</p>
                <div className="name-input">
                    <p>Name</p>
                    <input type="text" placeholder={error ? "Please enter a value!" : "e.g Web Design"} className={error ? "error" : ""} value={name} onChange={(e) => {setName(e.target.value); if(error){ setError(false)}} } />
                </div>
                <p className="modal-column-section-header">Columns</p>
                <div className="column-detail-selection">
                  <div className="column-input">
                    <input type="text"  />
                    <img src={exitSymbol} alt="" />
                    </div> 
                    <div className="modal-new-column">
                        <button>+Add New Column</button>
                    </div>
                    <div className="modal-create-new-board-btn" onClick={handleCreateBoard }>
                        <button>Create New Board</button>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Modal