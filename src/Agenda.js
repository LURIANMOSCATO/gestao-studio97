import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Create from "./Form";

import styles from './Agenda.module.css'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import {HiOutlineSearch} from 'react-icons/hi'
import {BsEyeFill, BsPersonFillCheck} from 'react-icons/bs'

import Modal from 'react-modal';
import { Link } from 'react-router-dom';
Modal.setAppElement("#root");

export default function Agenda() {

    const [ModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:81/api/crud.php')
          .then(res => setData(res.data))
          .catch(err => console.log(err));
      }, []);

  return (
    <div className={styles.container}>
        
        
            <button 
                onClick={openModal}
                className={styles.button_open}>
                <BsFillPersonPlusFill />
            </button>

            <div className={styles.search_box}>
            <HiOutlineSearch id="search-icon"/>
            <input type="search" placeholder="Buscar" />
            
            </div>

                <div className={styles.table_content}>
                    
                <table className={styles.table_container}>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Barbeiro</th>
                        <th>Serviço</th>
                        <th>Data</th>
                        <th>Hora</th>
                        <th>tempo</th>
                        <th>valor</th>
                        <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                    {data.map(item => (
                        <tr key={item.idCliente}>
                            <td>{item.idCliente}</td>
                            <td>{item.nomeCliente}</td>
                            <td>{item.telefoneCliente}</td>
                            <td>{item.barbeiro}</td>
                            <td>{item.servicoCliente}</td>
                            <td>{item.datas}</td>
                            <td>{item.hora}</td>
                            <td>{item.tempo}</td>
                            <td>R$ {item.valor}</td>
                            <td>
                            <div className={styles.act_buttons}>
            
                            <Link to={`/view/${item.idCliente}`}>

                            <button className={styles.button_links}>
                            <BsEyeFill/>
                            </button>
                            
                            </Link>

                            <button className={styles.button_links}>
                            <BsPersonFillCheck/>
                            </button>
                            </div>

                            </td>
                        </tr>
                    ))}
                        
                    </tbody>
                </table>
                </div>

                <Modal
                    isOpen={ModalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal Overlay"
                    overlayClassName={styles.modal_overlay}
                    className={styles.modal_content}>
                    <button onClick={closeModal} className={styles.close_btn}><GrClose/></button>
                            
                    <Create/>

                </Modal>
    </div>
  )
}
