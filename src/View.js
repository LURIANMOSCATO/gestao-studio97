import React, {useEffect, useState} from 'react'
import styles from './Form.module.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function View() {

    const {id} = useParams();
    //const navigate = useNavigate();

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

    useEffect(()=> {
        axios.get('http://localhost:81/api/crud.php/'+id)
        .then(res => {
            console.log(res)
            setValues({...values, name: res.data[0].nomeCliente, telefone: res.data[0].telefoneCliente,
                barbeiro: res.data[0].barbeiro
            
            })
        })
        .catch(error => console.log(error))
    }, [id])


    const handleSubmit = (e) => {
        axios.put('')
    }

  return (
    <div className={styles.container_view}>
        <h1 className={styles.header_title}>Edição de Registro</h1>

        <form onSubmit={handleSubmit}>

        <div className={styles.user_details}>
            
        <label htmlFor="">Nome</label>
        <div className={styles.box}>

        <input type="text"placeholder="Nome do Cliente" name="name" className={styles.input_field}
        value={values.name}
        onChange={e => setValues({...values, name: e.target.value})}
         />

        </div>

        <label htmlFor="">Telefone</label>
        <div className={styles.box}>
        <input type="text"placeholder="Telefone" className={styles.input_field}
        value={values.telefone}
        onChange={e => setValues({...values, telefone: e.target.value})}
        />
        </div>

        <label htmlFor="">Barbeiro</label>

            <div className={styles.box}>
            
            <select
            className={styles.input_field}
            value={values.barbeiro}
            onChange={e => setValues({...values, barbeiro: e.target.value})}>
                <option>--</option>
                <option>Guilherme</option>
                <option>Jonatan</option>
                <option>Davi</option>
                <option>Ajudante</option>
            </select>
            </div>

        </div>

                <div className={styles.button_view}>
                <Link to={"/agenda"}>
                <button 
                className={styles.button_action}>Cancelar
                </button>
                </Link>
                <button 
                className={styles.button_action}>Atualizar
                </button>
                </div>

        </form>
    </div>
  )
}

export default View