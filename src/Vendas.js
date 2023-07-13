import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import styles from './Vendas.module.css'
import { ToastContainer ,toast } from "react-toastify";
import { FaMoneyBillAlt} from 'react-icons/fa'
import {GiCash} from 'react-icons/gi'
import {MdRocketLaunch} from 'react-icons/md'
import {BsFillBasket3Fill, BsCashCoin, BsCash} from 'react-icons/bs'
import {HiUser} from 'react-icons/hi'


export default function Vendas() {

  const [data, setData] = useState([]);
  const [totald, setTotald] = useState([]);
  const [totalw, setTotalw] = useState([]);
  const [totalm, setTotalm] = useState([]);

  const [values, setValues] = useState({
    barbeiro:'',
    description: '',
    valor:''
    });

  useEffect(() => {
    axios.get('http://barber97.jelastic.saveincloud.net/store.php')
    .then(res => setData(res.data))
    .catch(err => console.log(err));

    axios.get('http://barber97.jelastic.saveincloud.net/storeday.php')
    .then(res => {
			setTotald(res.data[0].valor)
		}).catch(err => console.log(err));

    axios.get('http://barber97.jelastic.saveincloud.net/storeweek.php')
    .then(res => {
			setTotalw(res.data[0].valor)
		}).catch(err => console.log(err));

    axios.get('http://barber97.jelastic.saveincloud.net/storemonth.php')
    .then(res => {
			setTotalm(res.data[0].valor)
		}).catch(err => console.log(err));
  
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault();

    axios.post('http://barber97.jelastic.saveincloud.net/store.php', values)
    .then(res =>{
      if(res.status===200) {
        console.log(res);
        toast.success('Lançamento Realizado!', {
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
    .catch(err => console.log(err));
  }

  return (
    <div className={styles.container}>

    <div className={styles.cards}>

      <div className={styles.values}>

      <div className={styles.content}>

        <h1 className={styles.title}>dia
        <BsCash/>
        </h1>
        

        <div className={styles.values_money}>
          <span>{totald}</span>
        </div>

        </div>
      </div>

      <div className={styles.values}>

      <div className={styles.content}>

        <h1 className={styles.title}>Semana
        <BsCashCoin/>
        </h1>
        

        <div className={styles.values_money}>
          <span>{totalw}</span>
        </div>

        </div>
      </div>

      <div className={styles.values}>

      <div className={styles.content}>

        <h1 className={styles.title}>Mês
        <GiCash/>
        </h1>
        

        <div className={styles.values_money}>
          <span>{totalm}</span>
        </div>

        </div>
      </div>

    </div>

    <div className={styles.card}>

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
      <form className={styles.form} onSubmit={handleSubmit}>
        
      <div className={styles.details_form}>
      <label>Usuário</label>
      <div className={styles.box}>
      <HiUser/>
      <select
      onChange={e => setValues({...values, barbeiro: e.target.value})}
      >
        <option> </option>
        <option>Guilherme</option>
        <option>Davi</option>
        <option>Jonatan</option>
        <option>Ajudante</option>
      </select>
      </div>
      </div>
      
      <div className={styles.details_form}>
      <label>Produto</label>
      <div className={styles.box}>
      <BsFillBasket3Fill/>
      <select
      onChange={e => setValues({...values, description: e.target.value})}
      >
        <option></option>
        <option>Pomada</option>
        <option>Mianoxidil</option>
        <option>Gel</option>
        <option>Pós Barba</option>
        <option>Água</option>
        <option>Cerveja</option>
      </select>
      </div>
      </div>

      <div className={styles.details_form}>
      <label>Valor</label>
      <div className={styles.box}>
      <FaMoneyBillAlt/> 
      <input type='number'
      inputMode="numeric"
      pattern='[0-9]'
      onChange={e => setValues({...values, valor: e.target.value})}
      />
      </div>
      </div>
      <div className={styles.details_form}>
      <button className={styles.button_launch}>Lançar <MdRocketLaunch/></button>
      </div>
          
      </form>
    </div>

    <div className={styles.table}>
      <div className={styles.container_table}>

        <table>
        <thead className={styles.thead}>
          <tr>
          <th>Usuário</th>
          <th>Produto</th>
          <th>Data</th>
          <th>Valor</th>
          </tr>
          </thead>
          
          <tbody>
            {
            data.map(item =>{
            return <tr key={item.id}>
                  <td>{item.barbeiro}</td>
                  <td>{item.description}</td>
                  <td>{item.dateLaunch}</td>
                  <td>
                  <div 
                  className={styles.tbvalue}>R$ {item.valor}</div>
                  </td>
                  </tr>  
                })}
          </tbody>
      </table>
      </div>
    </div>

    </div>
  )
}
