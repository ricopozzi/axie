import Footer from '../components/Footer'
import Header from '../components/Header'
import styles from './aplicar.module.scss'
import ApplyForm from '../components/ApplyForm'

const Aplicar = () => {

    return(
        <>
         <Header />
         <main className={styles.mainSection} >
            <h1>Está procurando uma bolsa para jogar?</h1>
            <p>Junte-se a nós</p>
         </main>
         <section className={styles.rulesSection} >

             <h1>Bolsa para jogadores de Axie Infinty</h1>
             <p>Aplique para a bolsa e nós enviaremos um email se for aceito</p>
             <h3>Regras:</h3>
             <p>Várias contas são estritamente proibidas. Você não pode participar de outra bolsa ou usar outra conta Axie</p>
             <p>Se por qualquer motivo a conta Axie ou qualquer Axie for banido, você perderá permanentemente todas as suas recompensas. Além disso, você será excluído imediatamente, perderá a bolsa e com a proibição permanente de reintegração.</p>
             <span>Você precisa ter um endereço Ronin para receber as recompensas sem custos de transação.</span>
             <p>Você precisa ganhar um mínimo de 1000 SLP a cada 15 dias, caso contrário, você será expulso para dar lugar a outros. Este nível deve ser facilmente alcançado.</p>
             <p>Se você ficar inativo por mais de uma semana, será expulso. A única exceção pode ser a notificação antecipada.</p>
             <p>Se alguma das regras acima não for seguida, você será banido permanentemente e perderá todas as recompensas.</p>
             
             <div className={styles.rewards} >
                 <h1>Distribuição de recompensas</h1>
                 <div className={styles.rewardsContainer} >
                    <div className={styles.initialContainer} >
                        <h1>Nível inicial</h1>
                        <p>1000 até 1500 SLP a cada 15 dias</p>
                        <p>40% para o jogador</p>
                        <p>60% para o gestor da equipe</p>

                        <img src="https://assets.coingecko.com/coins/images/10366/large/SLP.png?1578640057" alt="" />
                    </div>
                    <div className={styles.immortalContainer} >
                        <h1>Nível Avançado</h1>
                        <p>Mais de 1500 SLP a cada 15 dias</p>
                        <p>50% para o jogador</p>
                        <p>50% para o gestor da equipe</p>

                        <img src="https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/axiebuzz/23wByPgNkpu2u5pmo9G6mF6DTLqatk82Cv5QV5dc6sjJaJXEmYDJYVmHj7rZVKDu6pYDf.png" alt="" />

                    </div>
                 </div>
             </div>
         </section>
         <ApplyForm />
         <Footer />
        </>
    )
}

export default Aplicar