import styles from './styles.module.scss'

const Questions = () => {
    return(
        <section className={styles.questionsSection} >
            <p>Dúvidas Frequentes</p>

            <div className={styles.questions} >
                
                <div>
                    <h1>Qual é o mínimo que posso investir?</h1>
                    <p>1 conta</p>

                </div>
                <div>
                    <h1>Quando as retiradas são feitas?</h1>
                    <p>A periodicidade das retiradas ocorre uma vez por mês, no primeiro final de semana.</p>

                </div>
                <div>
                    <h1>E se eu desistir do projeto?</h1>
                    <p>Se você desistir do projeto e por ter o portfólio e os Axies, não tem problema. Liquidamos os valores pendentes até a data de fechamento</p>

                </div>
                
                
            </div>

        </section>
    )
}

export default Questions