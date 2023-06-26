import styles from './Aluno.module.css'

export default function Aluno(props) {

    return (

        <div className={styles.post}>

            <div className={styles.container}>

                <h2>  {props.aluno.nome}  </h2>

                <p> Idade : {props.aluno.idade} </p>

                <p>  <p> Disciplinas Cadastradas : </p>  {props.aluno.disciplinas.map(e => <p> Nome: {e.nome + " | " + "Professor: " + e.professor} </p>)} </p>

                <span className={styles.slug}>{props.aluno.slug}</span>

            </div>
        </div>

    )
}