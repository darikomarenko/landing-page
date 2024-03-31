import styles from './styles.module.scss';
import cardOne from '../../assets/five.png';
import cardTwo from '../../assets/two.png';
import cardThree from '../../assets/four.png';
import { useState } from 'react';
import Modal from '../Modal';

export default function Sites() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };

  return (
    <section id='sites' className={styles['sites']}>
      <Modal open={openModal} onClose={handleCloseModal} />
      <div className={styles['sites__header']}>
        <div className={styles['sites__header-one']}>/наша<br/>гордость</div>
        <div className={styles['sites__header-two']}>Подготовим для Вас 3<br/>коммерческих<br/>предложения по<br/>созданию сайта</div>
      </div>
      <div className={styles['sites__samples']}>
        <img className={styles['sites__samples-card']} src={cardOne} alt='website'/>
        <img className={styles['sites__samples-card']} src={cardTwo} alt='website'/>
        <img className={styles['sites__samples-card']} src={cardThree} alt='website'/>
      </div>
      <button className={styles['sites__button']} onClick={handleOpenModal}>&#91; Заказать сайт &#93;</button>
    </section>
  );
}
