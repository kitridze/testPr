import Hero from "@/components/mine/hero/Hero";
import styles from './page.module.scss'
import Cards from "@/components/mine/cards/Cards";
import Creators from "@/components/mine/creators/Creators";
import Pricings from "@/components/mine/pricings/Pricings";
import FAQ from "@/components/mine/faq/FAQ";
import Title from "@/components/mine/title/Title";
export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Hero/>
      <Cards/>
      <Creators/>
      <Pricings/>
      <FAQ/>
      <Title/>
    </div>
  );
}
