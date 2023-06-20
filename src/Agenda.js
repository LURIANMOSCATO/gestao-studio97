import React, { useEffect, useState } from "react";
import axios from "axios";
import Create from "./Form";

import Modal from 'react-modal';
import styles from './Agenda.module.css'


import {GoSearch} from 'react-icons/go'
import {FaUserCheck} from 'react-icons/fa'
import {GrClose} from 'react-icons/gr'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {AiFillEye} from 'react-icons/ai'
import { Link } from "react-router-dom";

Modal.setAppElement("#root");

function Home(){

    const [ModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, [])

/*   const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err))
    }*/ 

    const handleCheck = (id) => {
        axios.post('http://localhost:8081/check/'+id)
        .then(res => {
            if(res.status===200)
        {
            console.log("tudo certo");      
        }
        })
        .catch(err => console.log(err));

        axios.delete('http://localhost:8081/delete/'+id)
        .then(res => {
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

    return (
        
        
        <div className={styles.container}>
            
                <button 
                onClick={openModal} 
                className={styles.button_open}>
                <BsFillPersonPlusFill/>
                </button>
            
            <div className={styles.table_content}>
                

            <div className={styles.search_box}>
            <GoSearch id="search-icon"/>
            <input type="search" placeholder="Buscar"
            onChange={(e)=>setSearch(e.target.value)} />
            
            </div>

                <table className={styles.table_container}>
                    <thead className={styles.thead}>
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
                        {data.filter((client) =>{
                            if(search===""){
                                return client
                            }
                            else if(client.nomeCliente.toLowerCase().includes(search.toLocaleLowerCase())){
                                return client
                            }
                            else if (client.datas.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
                                return client
                            }
                        }).map((client, index) => {
                            return <tr key={index}>
                                <td>{client.idCliente}</td>
                                <td>{client.nomeCliente}</td>
                                <td>{client.telefoneCliente}</td>
                                <td>{client.barbeiro}</td>
                                <td>{client.servicoCliente}</td>
                                <td>{client.datas}</td>
                                <td>{client.hora}</td>
                                <td>{client.tempo} Min</td>
                                <td> R$ {client.valor}</td>
                                <td>
                                    <div className={styles.action_buttons}>
                                    <Link to={`/view/${client.idCliente}`}>

                                    <button className={styles.link_buttons}>
                                    <AiFillEye/>
                                    </button>

                                    </Link>

                                    

                                    <button className={styles.link_buttons} onClick={ () => handleCheck(client.idCliente) }>
                                    <FaUserCheck/>
                                    </button>
                                    </div>

                                </td>
                            </tr>
                        })}
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

export default Home