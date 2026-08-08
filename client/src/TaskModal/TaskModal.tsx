import './TaskModal.css'

type ModalProperties = { 
    isOpen: boolean
    closeModal: () => void;
}

function Modal({isOpen, closeModal} : ModalProperties) { 

    if (!isOpen) { 
        return null;
    }

    return ( 
        <div className="modal-wrapper">
            <div className="modal-window">
                <p className="modal-header">Add New Board</p>
                <div className="name-input">
                    <p>Name</p>
                    <input type="text" placeholder="e.g Web Design" />
                </div>
                <p className="modal-column-section-header">Columns</p>
                <div className="column-detail-selection">
                  <div className="column-selector">
                    </div> 
                    <div className="modal-new-column">
                        <p>+ Add New Column</p>
                    </div>
                    <div className="modal-create-new-board-btn">
                        Create New Board
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal