import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {

    return (
        <header>

            <nav className={styles.container}>

                <div className={styles.logo}>

                    <div className={styles.title}>
                        <img src="../logo.png" className={styles.logoKing} />
                        <p>  King School </p>
                    </div>

                </div>

                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/about'>About</Link>
                    </li>


                </ul>
            </nav>

        </header>
    )
}
