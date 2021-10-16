import Header from '../components/Header/index'
import styles from './home.module.scss'
import Competences from '../components/Competences/index'
import JoinUs from '../components/JoinUs/index'

const Home = () => {
  return (
    <>
      <Header />
      <main className={styles.main} >
      <div className={styles.sideImage}>
            <img src="https://storage.googleapis.com/assets.axieinfinity.com/axies/3137655/axie/axie-full-transparent.png" alt="" />
        </div>

        <div className={styles.sideText} >  
            <h1>1# Primeira <br /> Bolsa Axie no Brasil</h1>
            <p>Bem vindos jogadores de Axie Infinity!</p>
            <p>Não tem dinheiro? Não tem um time?</p>

            <button>Aplicar para Bolsa!</button>
            
        </div>
      </main>

      <Competences />
      <JoinUs />
    </>
  )
}

export default Home
