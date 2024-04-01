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

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const wishes = formData.get('wishes') as string;
  
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Пожелания:', wishes);
  }

  return (
    <>
      <ModalBackground zindex="900" onClick={onClose}>
        <div className={styles['popup']}>
          <form className={styles['popup__form']} onSubmit={handleSubmit}>
            <div className={styles['popup__title']}>Обсудить проект</div>
            <div className={styles['popup__description']}>Оставьте свои контактные данные для обсуждения вашего проекта</div>
            <div className={styles['popup__inputGroup']}>
              <input type='text' className={styles['popup__input']} placeholder="Имя" name='name'/>
            </div>
            <div className={styles['popup__inputGroup']}>
              <input type='tel' className={styles['popup__input']} placeholder="Телефон" name='phone'/>
            </div>
            <div className={styles['popup__inputGroup']}>
              <input type='text' className={styles['popup__input']} placeholder="Пожелания" name='wishes' />
            </div>
            <button type="submit" className={styles['popup__button']}>Оставить заявку</button>
          </form>
        </div>
      </ModalBackground>
    </>
  );
}
