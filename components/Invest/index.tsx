import styles from './styles.module.scss'

const Invest = () => {
    return(
        <section className={styles.investSection}>
            <div className={styles.sideText} >
                <h6>Investidores</h6>
                <h1>Quer investir mas ainda não sabe como?</h1>
                <p>Bolsa Axie Brasil tem um sistema de investimento em bolsas de Axie Infinity.</p>

                <button>Saiba mais</button>
            </div>
            <div className={styles.sideImage} >
                <img src="https://bitbay.net/exchange-rate/kurs-eth-usd/ETH.png" alt="" />
            </div>
        </section>
    )
}

export default Invest