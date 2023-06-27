
import styles from './ListagemAlunos.module.css'
import alunos from '../../json/alunos.json'
import Aluno from '../Aluno'
import { Link } from 'react-router-dom'

export default function ListagemDeAlunos(props) {

    return (
        
        <>
            <h1  className={styles.titleList}> Listagem de Alunos </h1>

            <div className={styles.listaDeAlunos}>
                {alunos.map(e => <Aluno key={e.slug} aluno={e} />)}
            </div>
        </>
    )

}
