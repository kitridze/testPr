import styles from './Header.module.scss'



export default function Header() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.left}>
                AGENCY
            </div>
            <ul className={styles.right}>
                <li className={styles.first}>
                    <p>Overview</p>
                </li>
                <li>
                    <p>
                        Design
                    </p>
                </li>
                <li>
                    <p>
                        Development
                    </p>
                </li>
                <li className={styles.last}>
                    <p>
                        Community
                    </p>
                </li>
            </ul>
        </div>
    </div>
  );
}