import styles from './styles.module.scss'

const Header = () => {
  return(
    <header className={styles.header} > 
      <nav className={styles.nav} >
        <div className={styles.home} > <a href="/">Início</a>  
          </div>
        <div className={styles.headerButtons} > <a href="/sobre">Sobre</a></div>
        <div className={styles.join} > <div> <a href="/aplicar">Quero Bolsa</a>   </div> </div>
        <div className={styles.headerButtons} > <a href="/investidor">Investidores</a> </div>
      </nav>
    </header>
  )
}



export default Header;