
import styles from './ListagemAlunos.module.css'
import alunos from '../../json/alunos.json'
import Aluno from '../Aluno'

export default function ListagemDeAlunos() {

    return (
        
        <>
            <h1  className={styles.titleList}> Listagem de Alunos </h1>

            <div className={styles.listaDeAlunos}>
                {alunos.map(e => <Aluno key={e.slug} aluno={e} />)}
            </div>
        </>
    )

}
