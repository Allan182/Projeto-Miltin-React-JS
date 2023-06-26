import { useParams } from "react-router-dom";
import alunos from "../../json/alunos.json"
import Error404 from "../Error404";
import styles from './PostPage.module.css'

function AlunoPost() {

  const params = useParams();

  const aluno = alunos.find(elemento => elemento.id === Number(params.id));

  if (!aluno) {
    return (
      <Error404 />
    )
  }

  return (
    <>
      <div className={styles.AlunoPost}>
        <div className={styles.AlunoDescricao}>

          <h1>  {aluno.nome} </h1>
          <p> Idade: {aluno.idade} </p>
          <p> Slug: {aluno.slug} </p>
          <p> ID: {aluno.id} </p>
          <p> Disciplinas: {aluno.disciplinas.map(e => <p> Nome: {e.nome} | Professor: {e.professor} </p>)}</p>

        </div>
      </div>
    </>
  )
}

export default AlunoPost;
