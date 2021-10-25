import styles from './styles.module.scss'

const JoinUs = () => {
    return(
        <section className={styles.joinSession} >
            <div className={styles.sideText} >
                <h6>Bolsa Axie Brasil</h6>
                <h1>Junte-se a Nós</h1>
                <p>Inscreva-se para participar de nossa bolsa e enviaremos uma notificação caso você seja aceito.</p>

                <button> <a href="/aplicar">Aplicar para a Bolsa!</a> </button>

            </div>
        </section>
    )
}

export default JoinUs