import React, { useEffect, useState } from "react";
import styles from './Home.module.css'
import {BsCalendar3,BsCash, BsSunFill, BsWalletFill} from 'react-icons/bs'
import {GiRazor, GiComb} from 'react-icons/gi'
import {BiLogOut} from 'react-icons/bi'
import {RxScissors} from 'react-icons/rx'
import {HiHandThumbUp} from 'react-icons/hi2'

import axios from "axios";
import { useNavigate } from "react-router-dom";


const Home = () => {

    /*const [data, setData] = useState([]);
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

    /*useEffect(() =>{
        axios.get('')
        .then(res =>{
            if(res.data.Status === "Success") {
                navigate('/');
            } else {
                navigate('/login')
            }
        })

    }, [])*/
    const navigate = useNavigate();
    function logoutSubmit(){
        localStorage.setItem("login", false);
        localStorage.setItem("loginStatus", "Deslogado!");
        navigate("/login");
    }

    return (
        <div className={styles.container}>
                <button className={styles.out} onClick={logoutSubmit}><BiLogOut/> Sair</button>

                <div className={styles.content}>

                    <div className={styles.card}>

                        <div className={styles.box}>
                            <h1 className={styles.title}>Título</h1>
                            <BsCash/>

                            <div className={styles.value}>
                            
                            <span>R$100</span>
                            </div>

                            
                        </div>

                        <div className={styles.box}>Total</div>
                        <div className={styles.box}>Total</div>

                    </div>

                    <div className={styles.card}>card2</div>

                </div>
        </div>
    );
};

export default Home;