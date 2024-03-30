import styles from './styles.module.scss'
import globe from '../../assets/globe.svg'

export default function Prices() {
  return (
    <section className={styles['prices']}>
      <div className={styles['prices__header']}>
        <div className={styles['prices__header__one']}>/услуги</div>
        <div className={styles['prices__header__two']}>
            <div className={styles['prices__header__two-one']}>МЫ ПРЕДЛАГАЕМ</div>
        <div className={styles['prices__header__two-two']}>Наша команда осуществляет полный спектр услуг по созданию сайта на Тильде</div>
        </div>
      </div>
      <hr/>
      <div className={styles['prices__card']}>
        <img src={globe} alt='globe'/>
        <div className={styles['prices__card-title']}>ЛЕНДИНГ</div>
        <div className={styles['prices__card-price']}>от 9 000 ₽</div>
        <div className={styles['prices__card-description']}>
            <ul>
                <li>Одностраничный сайт</li>
                <li>Аналитика основных конкурентов</li>
                <li>Прототип и копирайтинг</li>
                <li>1 дизайн - концепция </li>
                <li>Дизайн оставшихся блоков</li>
            </ul>
        </div>
      </div>
      <hr/>
      <div className={styles['prices__card']}>
        <img src={globe} alt='globe'/>
        <div className={styles['prices__card-title']}>МНОГОСТРАНИЧНЫЙ</div>
        <div className={styles['prices__card-price']}>от 12 000 ₽</div>
        <div className={styles['prices__card-description']}>
            <ul>
                <li>Аналитика основных конкурентов</li>
                <li>Прототип и копирайтинг</li>
                <li>Дизайн главной страницы в Figma</li>
                <li>Вёрстка сайта на Тильде</li>
            </ul>
        </div>
      </div>
      <hr/>
      <div className={styles['prices__card']}>
        <img src={globe} alt='globe'/>
        <div className={styles['prices__card-title']}>ИНТЕРНЕТ-МАГАЗИН</div>
        <div className={styles['prices__card-price']}>от 19 000 ₽</div>
        <div className={styles['prices__card-description']}>
            <ul>
                <li>Аналитика основных конкурентов</li>
                <li>Прототип и копирайтинг</li>
                <li>Дизайн главной страницы в Figma</li>
                <li>Вёрстка сайта на Тильде</li>
                <li>Подключение каталога корзины, <br/>онлайн-оплаты и CRM - системы</li>
            </ul>
        </div>
      </div>
      <hr/>
    </section>
  )
}
