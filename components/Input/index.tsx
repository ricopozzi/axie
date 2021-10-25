import { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import styles from './styles.module.scss'

//@ts-ignore
const Input = ({ name, ...rest }) => {
    const inputRef = useRef()
    const { fieldName, defaultValue, registerField, error } = useField(name)

    useEffect(() => {

      registerField({

        name: fieldName,
        ref: inputRef,

        getValue: ref => {
          return ref.current.value
        },

        setValue: (ref, value) => {
          ref.current.value = value
        },

        clearValue: ref => {
          ref.current.value = ''
        },
      })
    }, [fieldName, registerField])


    return(
      <>
      {/*//@ts-ignore*/}
      <input ref={inputRef} defaultValue={defaultValue} name={name} {...rest} />
      {error && <span className={styles.error}>{error}</span>}
      </>
    ) 
  }

export default Input