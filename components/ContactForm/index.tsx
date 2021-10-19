
import styles from './styles.module.scss'
import React, { useRef, useState } from 'react'
import { Form } from '@unform/web'
import Input from '../Input'
import * as yup from 'yup'
import axios from 'axios'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const ContactForm = () => {
    const [ isSubmited, setIsSubmited ] = useState(null)
    const formRef= useRef(null)

    let schema = yup.object().shape({
        nome: yup.string().required('É necessário inserir um nome válido'),
        email: yup.string().email().required('É necessário inserir um email válido'),
        tel: yup.string().required().min(11, 'É necessário inserir um telefone válido com DDD')
        .matches(phoneRegExp, 'Numero de telefone inválido').typeError('É necessário inserir um telefone váilido')
    })
   

  async function handleSubmit(data:object) {

    try {
        //@ts-ignore
        formRef.current.setErrors({})


    
        await schema.validate(data, {abortEarly: false})
        await axios.post('/api/notion', data)
        //@ts-ignore
        setIsSubmited(true)
        
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

  return isSubmited? (
      <section className={styles.formSection} >
          <div className={styles.formContainer} > <p>Obrigado! Entraremos em contato</p></div>
      </section>
      
  ) : (
    <>
    <section className={styles.formSection} >
        <Form ref={formRef} className={styles.formContainer} onSubmit={handleSubmit}>

         <Input className={styles.input} name="nome" type="text" placeholder="Nome" />
         <Input className={styles.input} name="email" type="email" placeholder="Email" />
         <Input className={styles.input} name="tel" type="text" placeholder="Telefone com DDD" />

         <button className={styles.submitButton} type="submit">Enviar</button>

        </Form>
    </section>
        
    </>
  )
}

export default ContactForm