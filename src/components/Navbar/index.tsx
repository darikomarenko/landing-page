import styles from './styles.module.scss';
import whatsAppIcon from '../../assets/whatApp.svg';
import tgIcon from '../../assets/telegram.svg';
import studioIcon from '../../assets/logo.svg';
import { navbarItems } from '../../constants/Navbar/index';

export default function Navbar() {
  return (
    <section className={styles['navbar']}>
      <div className={styles['navbar__logo']}>
        <a href="#promo" aria-label="Logo">
          <img src={studioIcon} alt="Studio Icon" width={'71px'} height={'71px'} />
        </a>
      </div>
      <nav className={styles['navbar__links']}>
        <ul className={styles['navbar__links']}>
          {navbarItems.map((item) => (
            <li key={item.id}>
              <a href={item.link}>
                {item.title}
              </a>
            </li>
          ))}
          <li className={styles['navbar__links-box']}>
            <a href="#" target="_blank" className={styles['navbar__link']} aria-label="Whatsapp link">
              <img src={whatsAppIcon} alt="WhatsApp Icon" width={'41px'} height={'41px'}/>
            </a>
          </li>
          <li className={styles['navbar__links-box']}>
            <a href="#" target="_blank" className={styles['navbar__link']} aria-label="Viber link">
              <img src={tgIcon} alt="Telegram Icon" width={'41px'} height={'41px'} />
            </a>
          </li>
        </ul>
      </nav >
    </section>
  );
}