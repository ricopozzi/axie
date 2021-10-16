import styles from './styles.module.scss'
import { BsFillPersonFill } from 'react-icons/bs'
import { RiTeamFill } from 'react-icons/ri'
import { FaMoneyBillAlt } from 'react-icons/fa'

const Competences = () => {
    return(
        <section className={styles.section} > 
            <div className={styles.competences} >
                <BsFillPersonFill size={48} color={'#8257e5'} style={{background: 'none'}} />
                <h1>Gestores Exclusivos</h1>
                <p>Nós temos treinadores qualificados</p>
            </div>
            <div className={styles.competences} >
                <RiTeamFill size={48} color={'#8257e5'} style={{background: 'none'}} />
                <h1>Time dos Sonhos</h1>
                <p>Junte-se a Nós</p>
            </div>
            <div className={styles.competences} >
                <FaMoneyBillAlt size={48} color={'#8257e5'} style={{background: 'none'}} />
                <h1>Investimentos Recorrentes</h1>
                <p>Nós Montamos Times Semanalmente</p>
            </div>
        </section>
    )
}

export default Competences