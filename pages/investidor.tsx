import Header from '../components/Header'
import Questions from '../components/Questions'
import styles from './investidor.module.scss'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

const Investor = () =>{
    return(
        <>
        <Header />

        <main className={styles.main} >

            <div className={styles.leftSideText} >
                <h1>Quer investir e precisa de ajuda?</h1>
                <p>Entre em contato!</p>
            </div>
            <div className={styles.rightSideImage} >
                <img src="https://www.infomoney.com.br/wp-content/uploads/2019/06/ether.jpg?fit=900%2C506&quality=50&strip=all" alt="" />
            </div>

        </main>

        <section className={styles.investors} >
            <div className={styles.investorsContainer} >
                <p>I N V E S T I D O R E S</p>
                <h1>Consulte Bolsa Axie Brasil</h1>
                <h6>Aumente seu Dinheiro</h6>
                <h5>Esse modelo foi criado tendo em vista o crescimento do cenário, como forma de oferecer estrutura e facilidades para quem deseja se instalar com uma bolsa e também mudar a vida de outras pessoas.</h5>
            </div>
        </section>

        <section className={styles.planSection} >
            <div className={styles.initialContainer} >
                <h1>Plano Inicial</h1>
                <img src="https://storage.googleapis.com/assets.axieinfinity.com/axies/1297099/axie/axie-full-transparent.png" alt="" />
                <h2>25% de Comissão</h2>

                <div className={styles.planList} >
                    <p>Mínimo de 1 e máximo de 4 contas ativas</p>
                    <p>Conquiste jogadores através da nossa plataforma</p>
                    <p>A gestão financeira da carteira é da responsabilidade do investidor</p>

                </div>
            </div>
            <div className={styles.advancedContainer}>
                <h1>Plano Avançado</h1>
                <img src="https://storage.googleapis.com/assets.axieinfinity.com/axies/4475257/axie/axie-full-transparent.png" alt="" />
                <h2>25% de Comissão</h2>

                <div className={styles.planList} >
                    <p>Mínimo de 1 e máximo de 4 contas ativas</p>
                    <p>Conquiste jogadores através da nossa plataforma</p>
                    <p>A gestão financeira da carteira é da responsabilidade do investidor</p>
                    <p>Montagem de equipes de alto nível</p>
                    <p>Administração de jogadores e suporte total</p>
                    <p>Taxa fixa em 15% do valor do mensal</p>

                </div>
            </div>

        </section>

        <Questions />
        <h1 className={styles.contactUs} >Entre em contato</h1>
        <ContactForm />
        <Footer />
        </>
    )
}

export default Investor