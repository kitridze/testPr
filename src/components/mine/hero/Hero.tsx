
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
            <div className={styles.left}> 
                <h1>We make your website a hero</h1>
                <div className={styles.cont}>
                    <div className={styles.text}>
                        <img src="./svgs/YAD.svg" alt="" />
                        <div className={styles.hollow}>
                            <p>
                                <span style={{color:'#FFC93F'}}>Agency</span> is a digital agency, 
                                that offers full <span style={{color:'#FFFFFF'}}>design</span> and <span style={{color:'#FFFFFF'}}>software services</span>.
                                Our team is always ready  
                                <span style={{color:'#FFFFFF'}} className={styles.svgs}>for give life to your ideas.
                                    <img src={'./svgs/Eli.svg'}/>
                                    <img src={'./svgs/Pol.svg'}/>
                                    <img src={'./svgs/Rec.svg'}/>
                                </span>
                            </p>
                            <button>Services</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}> 
                <DsCarousel
                    items={carouselItems.map((item) => (
                    <div className={styles.slideContent} key={item.id}>
                        <img
                        src={'./imgs/carousel.jpg'}
                        className={styles.slideImage}
                        />
                    </div>
                    ))}
                    autoScrollInterval={4000} // 4 seconds
                    showPagination={true}
                    showArrows={true}
                    className={styles.customCarousel}
                />
                <button>
                    <p>Get in Touch</p>
                    <img src={'./svgs/btnArrowRight.svg'}/>
                </button>
            </div>
        </div>
    </div>
  );
}