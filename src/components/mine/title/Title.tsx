import styles from './Title.module.scss'



export default function Title() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.up}>
            <span>Hello</span>@motion.agency
        </div>
        <div className={styles.down}>
            Drop us a line
        </div>
    </div>
  );
}