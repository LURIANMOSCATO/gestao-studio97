import React from "react";
import styles from './Form.module.css'
import { useState } from "react";
import axios from "axios";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {GiRazor} from 'react-icons/gi';
import {BsWatch} from 'react-icons/bs'

function Create(){

    const [values, setValues] = useState({
        name:'',
        telefone:'',
        barbeiro:'',
        servico: '',
        datas: '',
        hora: '',
        tempo: '',
        valor: ''
    });



    //const navigate = useNavigate();
    const handleSubmit = (e) =>{

        e.preventDefault();

        axios.post('http://localhost:81/api/crud.php', values)
        .then(res => {
            if(res.status===200) {
            console.log(res);
            toast.success('Cliente Agendado!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                setTimeout(()=>{
                    window.location.reload();
                }, 2000);
            }
        })
        .catch(err => console.log(err))
    }


    return (
        <div className={styles.form_list}>

            <h1 className={styles.header_title}>Cadastro</h1>
            
            <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
            />

        <form onSubmit={handleSubmit}>

            <div className={styles.user_details}>
                
            <label htmlFor="">Nome</label>
            <div className={styles.box}>

            <input type="text"placeholder="Nome do Cliente" className={styles.input_field} 
            onChange={e => setValues({...values, name: e.target.value})} />

            </div>
            
            <label htmlFor="">Telefone</label>
            <div className={styles.box}>
            <input type="text"placeholder="Telefone" className={styles.input_field}
            onChange={e => setValues({...values, telefone: e.target.value})}/>
            </div>

            <label htmlFor="">Barbeiro</label>

            <div className={styles.box}>
            <GiRazor/>
            <select
            className={styles.input_field}
            onChange={e => setValues({...values, barbeiro: e.target.value})}>
                
                <option>--</option>
                <option>Guilherme</option>
                <option>Jonatan</option>
                <option>Davi</option>
                <option>Ajudante</option>
            </select>
            </div>

            <label htmlFor="">Serviço</label>
            <div className={styles.box}>
            <select 
            className={styles.input_field} 
            onChange={e => setValues({...values, servico: e.target.value})}>
                <option>--</option>
                <option>Cabelo</option>
                <option>Barba</option>
                <option>Completo</option>
            </select>
            </div>

            <label htmlFor="">Data</label>
            
            <div className={styles.box}>
            <input className={styles.input_field} type="date" onChange={e => setValues({...values, datas: e.target.value})}/>
            </div>

            <label htmlFor="">Hora</label>
            <div className={styles.box}>
            < BsWatch />
            <input className={styles.input_field} type="time" onChange={e => setValues({...values, hora: e.target.value})}/> 
            </div>
            <label htmlFor="">Tempo</label>

            <div className={styles.box}>
            <input className={styles.input_field} type="number" onChange={e => setValues({...values, tempo: e.target.value})}/>
            </div>

            <label htmlFor="" >Valor</label>
            <div className={styles.box}>
            <input className={styles.input_field} type="number" onChange={e => setValues({...values, valor: e.target.value})}/>
            </div>

            </div>
            
            <div className={styles.button}>
            <button 
            className={styles.button_action}>Cadastrar</button>
            </div>

            </form>
            </div>
        )
}

export default Create