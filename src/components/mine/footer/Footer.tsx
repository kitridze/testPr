import styles from './Footer.module.scss'



export default function Footer() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.cont}>
            <div className={styles.left}>
                Agency
            </div>
            <div className={styles.right}>
                <div className={styles.navs}>
                    <div className={styles.left}>
                        <div>Home</div>
                        <div>Home</div>
                        <div>Home</div>
                        <div>Home</div>
                    </div>
                    <div className={styles.right}>
                        <div>Home</div>
                        <div>Home</div>
                        <div>Home</div>
                        <div>Home</div>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={styles.hollow}>

                    </div>
                    <div className={styles.text}>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}