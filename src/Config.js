import React, {useState, useEffect} from 'react'
import styles from './Config.module.css'
import {HiOutlineShoppingBag} from 'react-icons/hi'
import {AiOutlineScissor} from 'react-icons/ai'
import {GrClose} from 'react-icons/gr'
import {BsFillPersonPlusFill} from 'react-icons/bs'
import {BiUserPlus} from 'react-icons/bi'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
import Modal from 'react-modal';
import FormBarber from './FormBarber'

export default function Config() {

  const [barber, setBarber] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  const [ModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


  useEffect(() => {
    axios.get('http://localhost:81/api/barber.php')
      .then(res => setBarber(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className={styles.container}>

    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>

    <TabList className={styles.tabList}>
    <Tab className={tabIndex === 0 ? `${styles.tab} ${styles.active}` : styles.tab}> 
    
    <div className={styles.desc_list}> 
    
    <BiUserPlus/>
    
    <div className={styles.desc_cont}> 
    
    <div className={styles.contet_txt}>
    Barbeiros 
    <p className={styles.description_list}>
      Cadastro de Barbeiros
    </p>
    </div>

    </div>

    </div>

    </Tab>
    <Tab className={tabIndex === 1 ? `${styles.tab} ${styles.active}` : styles.tab}>
    <div className={styles.desc_list}> 
    
    <HiOutlineShoppingBag/>
    
    <div className={styles.desc_cont}> 
    
    <div className={styles.contet_txt}>
    Produtos 
    <p className={styles.description_list}>
      Cadastro de Produtos
    </p>
    </div>

    </div>
    
    </div>
    </Tab>
    <Tab className={tabIndex === 2 ? `${styles.tab} ${styles.active}` : styles.tab}>
    <div className={styles.desc_list}> 
    
    <AiOutlineScissor/>
    
    <div className={styles.desc_cont}> 
    
    <div className={styles.contet_txt}>
    Barbeiros 
    <p className={styles.description_list}>
      Cadastro de Serviços
    </p>
    </div>

    </div>
    
    </div>
    </Tab>
  
    </TabList>

    <TabPanel className={styles.tabPanel}>

    <button 
    onClick={openModal}
    className={styles.button_open}>
    <BsFillPersonPlusFill />
    </button>
    
        <div className={styles.content_panel}>

          <div className={styles.contents}>
            <div className={styles.list}>
              <table className={styles.tablePanel}>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>Editar</th>
                    <th>Excluir</th>
                  </tr>
                </thead>
                <tbody>
                {barber.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nameBarber}</td>
                        </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
          
        
        </div>
        
        </TabPanel>

      <TabPanel className={styles.tabPanel}>Cadastro de Produtos </TabPanel>
      <TabPanel className={styles.tabPanel}>Cadastro de Serviços</TabPanel>
    </Tabs>

    <Modal
                    isOpen={ModalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Modal Overlay"
                    overlayClassName={styles.modal_overlay}
                    className={styles.modal_content}>
                    <button onClick={closeModal} className={styles.close_btn}><GrClose/></button>
                            
                    <FormBarber/>

                </Modal>
    </div>      

  );
}
