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

        <h1 className={styles.title}> Perfil </h1>
        <p className={styles.subtitle}> I'm a back-end web developer </p>

        <div className={styles.container}>

          <div className={styles.sobreMim}>
            <p> <h1>  Sobre mim </h1>   I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. Vitae sapien pellentesque habitant morbi tristique senectus et. Aenean sed adipiscing diam donec adipiscing tristique risus.
            </p>
          </div>

          <div className={styles.AlunoDescricao}>
            <h1> Descrição </h1>
            <p>  Nome: {aluno.nome} </p>
            <p> Idade: {aluno.idade} </p>
            <p> Slug: {aluno.slug} </p>
            <p> ID: {aluno.id} </p>
            <p> Disciplinas: {aluno.disciplinas.map(e => <p> Nome: {e.nome} | Professor: {e.professor} </p>)}</p>

          </div>
        </div>
      </div>
    </>
  )
}

export default AlunoPost;
