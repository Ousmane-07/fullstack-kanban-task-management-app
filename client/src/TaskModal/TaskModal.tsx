import './TaskModal.css'
import exitSymbol from '../../../client/starter-code/assets/Xsymbol.svg'



type ModalProperties = { 
    isOpen: boolean
    closeModal: () => void;
}

function Modal({isOpen, closeModal} : ModalProperties) { 

    if (!isOpen) { 
        return null;
    }

    return ( 
        <div className="modal-wrapper" onClick={closeModal}>
            <div className="modal-window"  onClick={(event) => event.stopPropagation()}>
                <p className="modal-header">Add New Board</p>
                <div className="name-input">
                    <p>Name</p>
                    <input type="text" placeholder="e.g Web Design" />
                </div>
                <p className="modal-column-section-header">Columns</p>
                <div className="column-detail-selection">
                  <div className="column-input">
                    <input type="text" />
                    <img src={exitSymbol} alt="" />
                    </div> 
                    <div className="modal-new-column">
                        <button>+Add New Column</button>
                    </div>
                    <div className="modal-create-new-board-btn">
                        <button>Create New Board</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal