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
        <div className={styles.popup}>
          <form className={styles.popup__form} onSubmit={handleSubmit}>
            <div className={styles.popup__title}>Обсудить проект</div>
            <div className={styles.popup__description}>Оставьте свои контактные данные для обсуждения вашего проекта</div>
            <div className={styles.popup__input}>
              <div className={styles['popup__input__inputGroup']}>
                <div className={styles['popup__input__inputGroup-one']}>
                  <label>Имя</label>
                  <input type='text' className={styles.popup__input} placeholder="Имя" name='name' required/>
                  <hr/>
                </div>
                <div className={styles['popup__input__inputGroup-one']}>
                  <label>Телефон</label>
                  <input type='tel' className={styles.popup__input} placeholder="Телефон" name='phone' required/>
                  <hr/>
                </div>
              </div>
              <div className={styles.popup__input__inputGroupTwo}>
                <label>Ваши пожелания по сайту</label>
                <input type='text' className={styles.popup__input} name='wishes' />
                <hr/>
              </div>
            </div>
            <button type="submit" className={styles.popup__button}>Оставить заявку</button>
          </form>
        </div>
      </ModalBackground>
    </>
  );
}
