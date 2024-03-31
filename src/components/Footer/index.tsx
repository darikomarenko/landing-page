import styles from './styles.module.scss'
import vkIcon from '../../assets/vk.svg'
import tgIcon from '../../assets/telegram.svg'
import tildaIcon from '../../assets/tilda.svg'


export default function Footer() {
  return (
    <section id='footer' className={styles['footer']}>
      <div className={styles['footer__title']}>СОЗДАДИМ ПРОЕКТ,<br/> КОТОРЫЙ ВАС ВЫДЕЛИТ</div>
      <div className={styles['footer__content']}>
        <div className={styles['footer__icons']}>
            <img src={vkIcon} width='93px' height='93px'/>
            <img src={tgIcon} width='93px' height='93px'/>
            <img src={tildaIcon} width='93px' height='93px'/>
        </div>
        <button className={styles['footer__button']}>
        &#91; Заказать проект &#93;
        </button>
        <div className={styles['footer__contacts']}>
            <div>+7 &#40;952&#41; 696 66-52</div>
            <div>+7 &#40;912&#41; 259 43-07</div>
            <div>Мы на связи ПН-СБ<br/>с 9:00 до 20:00 часов по Москве</div>
            <a>заказать обратный звонок</a>
        </div>
      </div>
    </section>
  )
}
