import Header from '../components/Header/index'
import styles from './sobre.module.scss'
import Footer from '../components/Footer/index'

const Sobre = () => {
    return(
        <>
         <Header />
         <main className={styles.main} >
         <div className={styles.sideImage}>
            <img src="https://miro.medium.com/max/250/0*FDnbwsUcwRMOsZ4c" alt="" />
         </div>

         <div className={styles.sideText} >  
            <h1>Conheça a Bolsa Axie Brasil!</h1>
            <p>Junte-se a Nós!</p>

            <button>Aplicar para Bolsa!</button>
            
         </div>
         </main>

         <section className={styles.visionSection}>
                <div className={styles.visionSideImage} >
                    <img src="https://exame.com/wp-content/uploads/2021/08/Axie-Infinity-game.jpg" alt="" />
                </div>
                <div className={styles.visionSideText} >
                    <h6>Nossa Visão</h6>
                    <h1>Ser a melhor bolsa Axie!</h1>
                    <p>Ser a maior Bolsa do Brasil, formando milhares de jogadores e os deixando felizes 🙂</p>
                </div>
                
         </section>

         <section className={styles.visionSection}>
               
                <div className={styles.visionSideText} >
                    <h6>Nossa Missão</h6>
                    <h1>Facilidade, Diversão e Fazer Dinheiro!</h1>
                    <p>Quer ganhar dinheiro de uma forma divertida? Essa é a nossa missão. Junte-se a nós 😛</p>
                </div>

                <div className={styles.visionSideImage} >
                    <img src="https://axiescholarship.eu/wp-content/uploads/2021/07/fundo.jpg" alt="" />
                </div>
                
         </section>
         <section className={styles.buttonSection} >
         <button className={styles.buttonz} ><a href="">Aplicar para a Bolsa!</a></button>
         </section>
         
         <Footer />
        </>
    )
}

export default Sobre