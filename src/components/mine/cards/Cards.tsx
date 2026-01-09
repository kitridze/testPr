import styles from './Cards.module.scss'



export default function Cards() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.cont}>
            <span>
                <div className={styles.card1}>
                    <h1>The team</h1>
                    <p>By subscribing to Agency, you get access to a dedicated project manager and a creative team.</p>
                </div>
                <div className={styles.card2}>
                    <span>
                        <h1>48 <span>/hr</span></h1>
                        <p>Turnaround</p>
                    </span>
                    <img src="./imgs/push.png" alt="" />
                </div>
            </span>
            <span>
                <div className={styles.card3}>
                    <h1>Contains everything your website needs!</h1>
                    <button><img src="./svgs/YAR.svg" alt="" />Hite the Team!</button>
                </div>
                <div className={styles.card4}>
                    <h1>UX & Strategy</h1>
                    <p>approach that helps you quickly generate value and gain a sustainable winning edge.</p>
                </div>
            </span>
            <span>
                <div className={styles.card5}>
                    <h1>Full-Stack Dev</h1>
                    <p>We are passionate about innovation and state of the art technologies and methodologies.</p>

                </div>
                <div className={styles.card6}>
                    <span>
                        <h1>have an idea?</h1>
                        <button><span/>Lets Chat</button>
                    </span>
                </div>
            </span>
        </div>
    </div>
  );
}