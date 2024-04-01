import styles from './styles.module.scss'
import cardOne from '../../assets/one.png'
import cardTwo from '../../assets/two.png'
import cardThree from '../../assets/three.png'
import cardFour from '../../assets/four.png'
import workerOne from '../../assets/worker1.png'
import workerTwo from '../../assets/worker2.png'
import { useState } from 'react';
import Modal from '../Modal';

export default function Promo() {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleOpenModal = (): void => {
    setOpenModal(true);
  };

  const handleCloseModal = (): void => {
    setOpenModal(false);
  };
  return (
    <section id='promo' className={styles['promo']}>
                  <Modal open={openModal} onClose={handleCloseModal} />
      <div className={styles['promo__maininfo']}>
      <div className={styles['promo__maininfo-titleOne']}>ДИЗАЙНИМ, ВЕРСТАЕМ </div>
      <div className={styles['promo__maininfo-titleTwo']}>САЙТЫ НА ТИЛЬДЕ</div>
      <div className={styles['promo__maininfo-description']}>что делает нас особенными? Мы не просто создаем сайты, мы создаем целые истории, которые захватывают внимание и оставляют незабываемое впечатление.</div>
      <div className={styles['promo__maininfo__buttons']}>
        <button className={styles['promo__maininfo__buttons-one']} onClick={handleOpenModal}>Связаться с нами</button>
        <button className={styles['promo__maininfo__buttons-two']} onClick={handleOpenModal}>NEFT2GAZ8</button>
        <div className={styles['promo__maininfo__buttons-three']}>10% по промокоду</div>
      </div>
      </div>
      <div className={styles['promo-stack-container']}>
    <div className={styles['promo-stack']}>
    <img src={cardFour} alt="Photo 3"  className={styles["promo-stack__photo"]}/>
    <img src={cardThree} alt="Photo 1" className={styles["promo-stack__photo"]}/>
  <img src={cardTwo} alt="Photo 2"  className={styles["promo-stack__photo"]}/>
  <img src={cardOne} alt="Photo 4"  className={styles["promo-stack__photo"]}/>
  </div>
        </div>
    <div className={styles['promo__team']}>
    <div className={styles['promo__team__description']}>
        <div className={styles['promo__team__description-title']}>НЕМНОГО О НАШЕЙ КОМАНДЕ</div>
        <div className={styles['promo__team__description-text']}>Наша команда по верстке сайтов на тильде - это профессионалы, готовые создать для вас уникальные и современные веб-страницы. Мы обладаем глубокими знаниями в области веб-дизайна и разработки, что позволяет нам создавать сайты, которые не только эстетичны, но и функциональны.</div>
        </div>
    <div className={styles['promo__team__table']}>
    <div className={styles['promo__team__table-item']}>МИРОНОВ АЛЕКСЕЙ</div>
    <div className={styles['promo__team__table-item']}>КУЗНЕЦОВА СОФИЯ</div>
    <div className={styles['promo__team__table-item']}>
        <img src={workerOne} alt='photo'></img>
        <div>ДИЗАЙНЕР</div></div>
    <div className={styles['promo__team__table-item']}>
    <img src={workerTwo} alt='photo'></img><div>МАРКЕТОЛОГ</div></div>
    </div>
        </div>
    </section>
  )
}
