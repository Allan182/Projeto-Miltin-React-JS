import { Link } from 'react-router-dom'
import styles from './Aluno.module.css'

export default function Aluno(props) {

    return (


        <Link to={`${'/alunos/' + props.aluno.id}`}>

            <div className={styles.post}>

                <div className={styles.container}>

                    <h2>  {props.aluno.nome}  </h2>

                    <p> Idade : {props.aluno.idade} 
                    <p>  <p> Disciplinas Cadastradas : </p>  {props.aluno.disciplinas.map(e => <p> Nome: {e.nome + " | " + "Professor: " + e.professor} </p>)} </p> </p>

                    <span className={styles.slug}>{props.aluno.slug} </span>

                </div>
            </div>

        </Link>

    )
}
