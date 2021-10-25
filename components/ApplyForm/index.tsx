import styles from './styles.module.scss'
import { Form } from '@unform/web'
import React, {useRef, useState} from 'react'
import Input from '../Input'
import * as yup from 'yup'
import axios from 'axios'


const ApplyForm = () => {
    const formRef = useRef(null)
    const [knowChecked, setKnowChecked ] = useState(false)
    const [scolarChecked, setScolarChecked ] = useState(false)
    const [ownChecked, setOwnChecked ] = useState(false)
    const [turnChecked, setTurnChecked ] = useState(false)

    const toggleKnow = () => {
        setKnowChecked(!knowChecked)
        
    }

    const toggleScolar = () => {
        setScolarChecked(!scolarChecked)
    }

    const toggleOwn = () => {
        setOwnChecked(!ownChecked)
    }
    
    const toggleTurn = () => {
        setTurnChecked(!turnChecked)
    }


     let schema = yup.object().shape({
        email: yup.string().email().required('É necessário inserir um email válido'),
        knowHowToPlay: yup.string(),
        anotherScolarship: yup.string(),
        ownAccount: yup.string(),
        occupation: yup.string().required(),
        hoursADay: yup.string().required(),
        fullName: yup.string().required(),
        age: yup.string().required(),
        city: yup.string().required(),
        turnGames: yup.string()
        
    })
   
    

    const handleSubmit = async (data: object) => {

        try {
            //@ts-ignore
            formRef.current.setErrors({})

            await schema.validate(data, { abortEarly: true})
            await axios.post('/api/apply', data)

            console.log(data)
            
        } catch (err) {

            const validationErrors = {}

            if (err instanceof yup.ValidationError) {
    
                err.inner.forEach(error => {
                    //@ts-ignore
                    validationErrors[error.path] = error.message
                
                })
                //@ts-ignore
                formRef.current.setErrors(validationErrors)
        }
    }
}

    return(
        <>
        <Form ref={formRef} className={styles.formSection} onSubmit={handleSubmit}>
                <h1>Aplique para a bolsa Axie</h1>

                <p>Email:</p>
                 <Input type="email" name="email" className={styles.textInput} />
                <p>Você sabe como jogar Axie Infinity?</p>

                <div className={styles.checkboxContainer} >
                 <Input onChange={toggleKnow} type="checkbox" name="knowHowToPlay" className={styles.checkBox} value={knowChecked} />
                <p>Sim</p>
                </div>
               
                <p>Você participa de outra bolsa Axie?</p>

                <div className={styles.checkboxContainer} >
                 <Input onChange={toggleScolar} type="checkbox" name="anotherScolarship" className={styles.checkBox} value={scolarChecked} />
                <p>Sim</p>
                </div>
                <p>Você tem sua própria conta Axie?</p>

                <div className={styles.checkboxContainer} >
                 <Input onChange={toggleOwn} type="checkbox" name="ownAccount" className={styles.checkBox} value={ownChecked} />
                <p>Sim</p>
                </div>

                <p>Qual é sua profissão?</p>
                 <Input type="text" name="occupation" className={styles.textInput} />

                <p>Quantas horas por dia você tem disponível?</p>
                 <Input type="text" name="hoursADay" className={styles.textInput} />

                <p>Digite seu nome completo:</p>
                 <Input type="text" name="fullName" className={styles.textInput} />

                <p>Quantos anos você tem?</p>
                 <Input type="text" name="age" className={styles.textInput} />

                <p>Em qual cidade você mora?</p>
                 <Input type="text" name="city" className={styles.textInput} />

                <p>Você tem experiência jogando jogos baseado em turnos?</p>
                <div className={styles.checkboxContainer} >
                 <Input type="checkbox" name="turnGames" className={styles.checkBox} value={turnChecked} />
                <p>Sim</p>
                </div>        

            <button className={styles.submitButton} type="submit" >Enviar formulário</button>    
            
            
        </Form> 
        
        </> 
    )
}


export default ApplyForm