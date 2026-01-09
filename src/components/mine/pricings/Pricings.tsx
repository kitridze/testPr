import { cn } from '@/lib/utils';
import styles from './Pricings.module.scss'



export default function Pricings() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.cont}>
            <h1>
                Simple Pricing
            </h1>
            <p>
                digital agency, that offers full design and software services.
            </p>
            <div className={styles.cards}>
                <div className={cn(styles.card, styles.cardLeft)}>
                    <button className={styles.vidget}>
                        Fully Booked
                    </button>
                    <span>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                30-day access
                            </div>
                            <div className={styles.right}>
                                €299
                            </div>
                        </div>
                        <div className={styles.bot}>
                            <h1>
                                Handyman
                            </h1>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Core Framework setup
                            </p>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Priority support
                            </p>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Unlimited tasks
                            </p>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Turnaround 48h
                            </p>
                        </div>
                        <button>
                            Subscribe to waitlist<img src={'/svgs/btnArrowRightSM.svg'}/>
                        </button>
                    </span>
                </div>
                <div className={cn(styles.card, styles.cardCenter)}>
                    <button className={styles.vidget}>
                        5 slots left.
                    </button>
                    <span>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                30-day access
                            </div>
                            <div className={styles.right}>
                                €1,299
                            </div>
                        </div>
                        <div className={styles.bot}>
                            <h1>
                                The Team
                            </h1>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Full pages
                            </p>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Core Framework development
                            </p>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Custom Animations
                            </p>
                            <p>
                                <img src="/svgs/ptichka.svg" alt="" />
                                Unlimited tasks
                            </p>
                        </div>
                        <button>
                            Hire the Team!<img src={'/svgs/btnArrowRightMD.svg'}/>
                        </button>
                    </span>
                </div>
                <div className={cn(styles.card, styles.cardRight)}>
                    <span>
                        <div className={styles.top}>
                            <div className={styles.left}>
                                On demand
                            </div>
                            <div className={styles.right}>
                                €5,000+
                            </div>
                        </div>
                        <div className={styles.bot}>
                            <h1>
                                Handyman
                            </h1>
                            <p>
                                We can certainly help you with one-off projects of small to large scale, 
                                just leave us your phone number and we will get back to you.
                            </p>
                        </div>
                        <button>
                            Book a meeting<img src={'/svgs/Calendar.svg'}/>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
}