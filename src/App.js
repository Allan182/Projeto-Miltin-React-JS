import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Header from "./componentes/Header";
import Inicio from "./paginas/Inicio"
import Error404 from "./paginas/Error404";
import AlunoPost from "./paginas/AlunoPost";
import styles from "./App.module.css";

export default function App() {

  return (

    <div className={styles.main}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path="/alunos/:id" element={<AlunoPost />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
