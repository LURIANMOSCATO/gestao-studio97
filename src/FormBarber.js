import React from "react";
import styles from './Form.module.css'
import { useState } from "react";
import axios from "axios";
import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {GiRazor} from 'react-icons/gi';
import {BsWatch} from 'react-icons/bs'

function FormBarber(){



    return (
        <div className={styles.form_list}>

        <h1 className={styles.header_title}>Cadastro</h1>

        <form>

            <div className={styles.user_details}>
                
            <label htmlFor="">Nome</label>

            <div className={styles.box}>

            <input type="text"placeholder="Nome do Barbeiro" className={styles.input_field} 
            /*onChange={e => setValues({...values, name: e.target.value})} */
            />

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

export default FormBarber