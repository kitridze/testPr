
import DsCarousel from '../dsCarousel/DsCarousel';
import styles from './Hero.module.scss'


const carouselItems = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    }
];

export default function Hero() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
            <div className={styles.right}> 
                <h1></h1>
                <p></p>
            </div>
            <div className={styles.left}>
                <DsCarousel
                    items={carouselItems.map((item) => (
                    <div className={styles.slideContent} key={item.id}>
                        <img
                        src={'carousel.jpg'}
                        className={styles.slideImage}
                        />
                    </div>
                    ))}
                    autoScrollInterval={4000} // 4 seconds
                    showPagination={true}
                    showArrows={true}
                    className={styles.customCarousel}
                />
            </div>
        </div>
    </div>
  );
}