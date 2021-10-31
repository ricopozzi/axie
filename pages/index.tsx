import Header from '../components/Header/index'
import styles from './home.module.scss'
import Competences from '../components/Competences/index'
import JoinUs from '../components/JoinUs/index'
import Invest from '../components/Invest/index'
import Footer from '../components/Footer/index'

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main} >
      <div className={styles.sideImage}>
            <img src="https://storage.googleapis.com/assets.axieinfinity.com/axies/3137655/axie/axie-full-transparent.png" alt="" />
        </div>

        <div className={styles.sideText} >  
            <h1>A Bolsa Axie mais IRADA do Brasil</h1>
            <p>Bem vindos jogadores de Axie Infinity!</p>
            <p>Não tem dinheiro? Não tem um time?</p>

            <button> <a href="/aplicar"> Aplicar para Bolsa!</a></button>
            
        </div>
      </main>

      <Competences />
      <JoinUs />
      <Invest />
      <Footer />
    </>
  )
}

export default Home
