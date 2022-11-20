import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser, unsetUser } from "../../reducers/user/userSlice";
import useModalAlert from '../../hooks/modals/useModalAlert'
import imgTrainer from '../../assets/img/trainer.webp'
const InputName = () => {
  const [ObjUser, setObjUser] = useState({userName:''});
  const {showModal, hideModal, MyModal} = useModalAlert();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const enterName = () => {
    if(ObjUser.userName.trim()==='') {showModal(); return}
    dispatch(setUser(ObjUser));
    navigate("/pokedex");
  };

  return (
    <div className="container text-center">

      <div className="row justify-content-center">
        <h1>Enter your Name - Pokemon Trainer</h1>
        <img src={imgTrainer} className=".img-fluid" style={{ maxWidth: '500px',height: 'auto' }}/>
      </div>

      <div className="row justify-content-center">
        <input className="form-control d-block"
          autoFocus
          style={{width:'500px'}}
          type="text"
          onChange={(e) => setObjUser({userName:e.target.value})}
          value={ObjUser.userName}
        />       

        <button style={{width:'100px'}} className="btn btn-primary" onClick={enterName}>Enter</button>
        {ObjUser.userName.trim()==='' && MyModal('Error!','Insert your Name please!')}
      </div>
    </div>
  );
};

export default InputName;