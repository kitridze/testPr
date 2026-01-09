import { cn } from '@/lib/utils';
import styles from './Creators.module.scss'



export default function Creators() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.cont}>
            <h1>
                The Creators
            </h1>
            <p>
                digital agency, that offers full design and software services.
            </p>
            <div className={styles.cards}>
                <div className={cn(styles.card, styles.left)}>
                    <span>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <img src="./imgs/logo1.png" alt="" />
                            </div>
                            <div className={styles.center}>
                                <h1>
                                    Core Framework
                                </h1>
                                <button>
                                    Best wordpress Plugin 2023
                                </button>
                            </div>
                            <div className={styles.right}>
                                <button>
                                    <img src="/svgs/arrowUpRight.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.bot}>
                            At Core Framework, our mission is to revolutionize the way website 
                            developers of all skill sets approach website development,
                            especially through the use of CSS frameworks.
                        </div>
                    </span>
                </div>
                <div className={cn(styles.card, styles.right)}>
                    <span>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                <img src="./imgs/logo2.png" alt="" />
                            </div>
                            <div className={styles.center}>
                                <h1>
                                    Motion.page
                                </h1>
                                <button>
                                    #1 WordPress Animation plugin
                                </button>
                            </div>
                            <div className={styles.right}>
                                <button>
                                    <img src="/svgs/arrowUpRight.svg" alt="" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.bot}>
                            our mission is to revolutionize the way 
                            website developers of all skill sets approach 
                            website development, especially through the use of CSS frameworks.
                        </div>
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}