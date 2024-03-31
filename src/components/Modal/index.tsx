import ModalBackground from "../ModalBackground";
import styles from './styles.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, onClose }: ModalProps) {
  if (!open) {
    return null;
  }

  return (
    <>
      <ModalBackground zindex="900" onClick={onClose}>
        <div className={styles['popup']}>
          <div className={styles['popup__title']}>Обсудить проект</div>
          <div className={styles['popup__description']}>Оставьте свои контактные данные для обсуждения вашего проекта</div>
          <div className={styles['popup__namePhone']}>
            <input type='text' className={styles['popup__name']} />
            <input type='tel' className={styles['popup__phone']} />
          </div>
          <input type='text' className={styles['popup__wishes']} />
          <button className={styles['popup__button']}>Оставить заявку</button>
        </div>
      </ModalBackground>
    </>
  )
}
