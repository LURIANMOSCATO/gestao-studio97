import React, { useEffect, useState } from "react";
import styles from './Home.module.css'

import {BsCalendar3, BsSunFill, BsWalletFill} from 'react-icons/bs'
import {GiRazor, GiComb} from 'react-icons/gi'
import {RxScissors} from 'react-icons/rx'
import {HiHandThumbUp} from 'react-icons/hi2'

import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


const Home = () => {

    const [data, setData] = useState([]);
    const [ clients, setClients] = useState([]);
    const [ clientsday, setClientsday] = useState([]);
    const [ clientsgui, setClientsgui] = useState([]);
    const [ clientsjon, setClientsjon] = useState([]);
    const [ clientsjontotal, setClientsjontotal] = useState([]);
    const [ clientsguitotal, setClientsguitotal] = useState([]);
    

    const navigate = useNavigate();

    
    axios.defaults.withCredentials = true;
    useEffect(() =>{
        axios.get('http://localhost:8081/balance/')
        .then(res =>{
            setData(res.data[0].valor)
        }).catch(err => console.log(err));

        axios.get('http://localhost:8081/clients')
        .then(res =>{
            setClients(res.data[0].idCliente)
        }).catch(err => console.log(err));

        axios.get('http://localhost:8081/clientsday')
        .then(res =>{
            setClientsday(res.data[0].idCliente)
        }).catch(err => console.log(err));

        axios.get('http://localhost:8081/clientsgui')
        .then(res =>{
            setClientsgui(res.data[0].idCliente)
        }).catch(err => console.log(err));

        axios.get('http://localhost:8081/clientsguitotal')
        .then(res =>{
            setClientsguitotal(res.data[0].idCliente)
        }).catch(err => console.log(err));

        axios.get('http://localhost:8081/clientsjon')
        .then(res =>{
            setClientsjon(res.data[0].idCliente)
        }).catch(err => console.log(err));

        axios.get('http://localhost:8081/clientsjonday')
        .then(res =>{
            setClientsjontotal(res.data[0].idCliente)
        }).catch(err => console.log(err));

    }, [])

    useEffect(() =>{
        axios.get('http://localhost:8080/')
        .then(res =>{
            if(res.data.Status === "Success") {
                navigate('/');
            } else {
                navigate('/login')
            }
        })

    }, [])

    const handleLogout = () => {
        axios.get('http://localhost:8080/logout')
        .then(res => {
            if(res.data.Message === "Success") {
                window.location.reload(true);
                navigate('/login')
            } else {
                console.log("Error");
            }
        }).catch(err => console.log(err))
    }

    return (
        <div className={styles.container}>
        
            
            
            <div className={styles.content}>
                <div className={styles.card}>

                    <div className={styles.count}>

                        <div className={styles.header_title}>
                            <h1 className={styles.content_title}>Carteira</h1>
                        </div>
                        <BsWalletFill/>

                        <div className={styles.content_value}>
                            <span> R$ {data}</span>
                            <p>Balanço Total</p>

                            <div className={styles.btn}>
                                <button className={styles.btn_report}>Dia</button>
                                <button className={styles.btn_report}>Semana</button>
                            </div>

                        </div>

                    </div>

                    <div className={styles.count}>

                        <div className={styles.header_title}>
                            <h1 className={styles.content_title}>Hoje</h1>
                        </div>
                        <BsSunFill/>

                        <div className={styles.content_value}>
                        <span> {clientsday} </span>
                        </div>

                        
                    </div>

                    <div className={styles.count}>

                        <div className={styles.header_title}>
                            <h1 className={styles.content_title}>Total de Agendas</h1>
                        </div>
                        <BsCalendar3/>


                        <div className={styles.content_value}>
                        <span> {clients} </span>
                        </div>

                        <div className={styles.details}>

                            <div className={styles.service_content}>
                            <h1 className={styles.service_detail}>Cabelo</h1>
                            <span>4</span>
                            </div>

                            <div className={styles.service_content}>
                            <h1 className={styles.service_detail}>Barba</h1>
                            <span>4</span>
                            </div>


                            <div className={styles.service_content}>
                            <h1 className={styles.service_detail}>Completo</h1>
                            <span>4</span>
                            </div>
                            

                        </div>

                    </div>

                </div>

                <div className={styles.card}>

                <div className={styles.dashboard_counter}>

                <div className={styles.dashboard_count}>

                        <div className={styles.header_title}>
                            <h1 className={styles.content_title}>Guilherme</h1>
                        </div>
                        <GiRazor/>

                        <div className={styles.content_value}>
                        <span>{clientsguitotal}</span>
                        <p>Total Hoje ({clientsgui})</p>
                        </div>

                    </div>
                    <div className={styles.dashboard_count}>
                        <div className={styles.header_title}>
                            <h1 className={styles.content_title}>Jonatan</h1>
                        </div>
                        <RxScissors/>
                        <div className={styles.content_value}>
                        <span> {clientsjontotal}</span>
                        <p>Total Hoje ({clientsjon})</p>
                        </div>
                    </div>
                    <div className={styles.dashboard_count}>
                        <div className={styles.header_title}>
                            <h1 className={styles.content_title}>Davi</h1>
                        </div>
                        <GiComb/>
                        <div className={styles.content_value}>
                        <span> 55</span>
                        <p>Total Hoje (2)</p>
                        </div>
                    </div>
                    <div className={styles.dashboard_count}>
                        <div className={styles.header_title}>
                            <h1 className={styles.content_title}>Ajudante</h1>
                        </div>
                        <HiHandThumbUp/>
                        <div className={styles.content_value}>
                        <span> 55</span>
                        <p>Total Hoje (2)</p>
                        </div>
                    </div>

                </div>

                    
                </div>

            </div>
            <button onClick={handleLogout}>Sair</button>    
        </div>
    );
};

export default Home;