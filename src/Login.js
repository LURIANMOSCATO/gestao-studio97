import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import Modal from 'react-modal';
import {CiLock} from 'react-icons/ci'
import {BsLockFill} from 'react-icons/bs'
import {ImUser} from 'react-icons/im'
import {GrClose} from 'react-icons/gr'

export default function Login() {

    const [ModalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    const [ values, setValues] = useState({
        user: '',
        password: ''
    })

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    function handleSubmit(e) {
        e.preventDefault();
        axios.post('http://localhost:8080/login', values)
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/');
                } else {
                    alert(res.data.Message);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Login</h1>
            <button 
                onClick={openModal} 
                className={styles.button_open}>
                    <CiLock/>
                </button>

                <Modal
                isOpen={ModalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal Overlay"
                overlayClassName={styles.modal_overlay}
                className={styles.modal_content}>

                    <button onClick={closeModal} className={styles.close_btn}><GrClose/></button>

                        <form onSubmit={handleSubmit}>

                        <div className={styles.user_details}>
                            
                        <label htmlFor="">Nome</label>
                        <div className={styles.box}>
                            <ImUser/>

                        <input type="text"placeholder="Digite seu Usuário" className={styles.input_field}
                        onChange={e => setValues({...values, user: e.target.value})}
                        />
                        </div>
                        <label htmlFor="">Senha</label>
                        <div className={styles.box}>
                            <BsLockFill/>
                        <input type="password"placeholder="Digite sua Senha" className={styles.input_field} 
                        onChange={e => setValues({...values, password: e.target.value})}
                        />
                        </div>
                        </div>

                        <div className={styles.button}>
                        <button 
                        className={styles.button_action}>Entrar</button>
                        </div>

                        </form>

                </Modal>

            


        </div>
    )
}