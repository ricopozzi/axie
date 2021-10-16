import styles from './styles.module.scss'

const Header = () => {
  return(
    <header className={styles.header} > 
      <nav className={styles.nav} >
        <div className={styles.home} > Início  
          </div>
        <div className={styles.headerButtons} > Sobre nós  </div>
        <div className={styles.join} > <div> Quero Bolsa </div> </div>
        <div className={styles.headerButtons} > Investidores</div>
      </nav>
    </header>
  )
}



export default Header;