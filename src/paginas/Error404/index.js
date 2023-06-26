import { Link, useNavigate } from 'react-router-dom';
import styles from './Error404.module.css'

function Error404() {

  const navigate = useNavigate();

  return (

    <div className={styles.notFound}>

      <h1 className={styles.error}> 404 Error</h1>

      <h1 className={styles.title}> Page not Found. </h1>

      <div className={styles.btVoltar} onClick={() => navigate(-1)} >
        Return
      </div>

    </div>

)


}
export default Error404;
