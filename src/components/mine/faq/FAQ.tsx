
import MineAccordion from '../mineAccordion/MineAccordion';
import styles from './FAQ.module.scss'



export default function FAQ() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.cont}>
            <img src="/imgs/jacket.png" alt="" />
            <div className={styles.top}>
                <h1>
                    Frequently asked Questions
                </h1>
                <button>Have a Question?</button>
            </div>
            <div className={styles.bot}>
                <div className={styles.left}>
                    <h1>
                        Getting started
                    </h1>
                    <p>
                        Trust & Safety
                    </p>
                    <p>
                        Services
                    </p>
                    <p>
                        Billing
                    </p>
                </div>
                <div className={styles.right}>
                    <MineAccordion/>
                </div>
            </div>
        </div>
    </div>
  );
}