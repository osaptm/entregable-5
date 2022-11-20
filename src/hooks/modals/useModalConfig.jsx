import { useRef , useState} from "react";
import { Modal} from  'bootstrap'

const useModalConfig = () => {
    const modalRef = useRef()
    const [Name, setName] = useState('');

    const showModal = () => {
        const modalEle = modalRef.current
        const bsModal = new Modal(modalEle, {
            backdrop: 'static',
            keyboard: false
        })
        bsModal.show()
    }
    
    const hideModal = () => {
        const modalEle = modalRef.current
        const bsModal= Modal.getInstance(modalEle)
        bsModal.hide()
    }
    

    const MyModal = (changeUser, userName) => {
        return(<div className="ModalAlert">
            {/* <button type="button" className="btn btn-primary" onClick={showModal}>Add Employee</button> */}
            <div className="modal fade" ref={modalRef} tabIndex="-1" >
             <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">CONFIG POKEDEX</h5>
                    <button type="button" className="btn-close" onClick={hideModal} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                   


                
                  <div class="mb-3">
                    <label className="form-label">Name</label>
                    <input type="email" className="form-control" onChange={(e)=>{setName(e.target.value)}} value={Name} />
                  </div>
                  
         


                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={()=>{hideModal(); changeUser('SDFSDFSDFSDFS');}}>Close</button>
                    {/* <button type="button" className="btn btn-primary">Understood</button> */}
                  </div>
                </div>
              </div>
            </div>
        </div>)
    }
    return {showModal, hideModal, MyModal};
};

export default useModalConfig;