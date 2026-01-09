import styles from './Footer.module.scss'



export default function Footer() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.cont}>
            <div className={styles.left}>
                <h1>Agency</h1>
                <div className={styles.navs}>
                    <div className={styles.nav}>
                        <div>Home</div>
                        <div>Services</div>
                        <div>Design made simple</div>
                        <div>Simple pricing</div>
                    </div>
                    <div className={styles.nav}>
                        <div>Work</div>
                        <div>Design Only</div>
                        <div>Design & Development</div>
                        <div>Contact</div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.icons}>
                    <div className={styles.hollow}>
                        <img src="/svgs/insta.svg" alt="" />
                        <img src="/svgs/basket.svg" alt="" />
                        <img src="/svgs/Be.svg" alt="" />
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