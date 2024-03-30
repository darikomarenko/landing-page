import styles from './/styles.module.scss'
import { data } from '../../constants/index'
import ReviewCard from './ReviewCard';

export default function Reviews() {
  return (
    <section className={styles['reviews']}>
    <h2 className={styles['reviews__title']}>МНЕНИЕ О НАС</h2>
    <ul className={styles['reviews__list']}>
        {data.map((item) => {
            return <ReviewCard key={item.id} item={item} />;
        })}
    </ul>
</section>
  )
}
