import Link from 'next/link'
import styles from './Nav.module.scss'

export default() => (
    <nav className={styles.nav}>
        <h1>i am nav</h1>
        <Link href='/'>
            <a>Home</a>
        </Link>
        <Link href='/About'>
            <a>About</a>
        </Link>
    </nav>
)