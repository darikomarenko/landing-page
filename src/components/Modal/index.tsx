import ModalBackground from "../ModalBackground";
import styles from './styles.module.scss';
import ReactPhoneNumberInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useState, useEffect } from 'react';
import { E164Number } from "libphonenumber-js/core";
import SuccessPopup from "./SuccessPopup";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, onClose }: ModalProps) {
  const [phoneValue, setPhoneValue] = useState<E164Number | undefined>(undefined);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successPopupVisible, setSuccessPopupVisible] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isSubmitted) {
      setSuccessPopupVisible(true)
      timer = setTimeout(() => {
        setIsSubmitted(false);
        setSuccessPopupVisible(false);
        onClose();
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [isSubmitted, onClose]);

  if (!open) {
    return null;
  }


  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const phone = phoneValue?.toString() || '';
    const wishes = formData.get('wishes') as string;
  
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Пожелания:', wishes);
    
    setIsSubmitted(true)
  }

  return (
    <>
      <ModalBackground zindex="900" onClick={onClose}>
        <div className={styles['popup']}>
          <form className={styles['popup__form']} onSubmit={handleSubmit}>
            <div className={styles['popup__title']}>Обсудить проект</div>
            <div className={styles['popup__description']}>Оставьте свои контактные данные для обсуждения вашего проекта</div>
            <div className={styles['popup__input']}>
              <div className={styles['popup__input__inputGroup']}>
                <div className={styles['popup__input__inputGroup-one']}>
                  <label>Имя</label>
                  <input type='text' className={styles['popup__input']} placeholder="Алексей" name='name' pattern="[A-Za-zА-Яа-я\s]*" required/>
                  <hr/>
                </div>
                <div className={styles['popup__input__inputGroup-one']}>
                  <label>Телефон</label>
                  <ReactPhoneNumberInput
                    defaultCountry="RU"
                    international
                    placeholder="Телефон"
                    name='phone'
                    value={phoneValue}
                    onChange={setPhoneValue} 
                    required
                  />
                  <hr/>
                </div>
              </div>
              <div className={styles['popup__input__inputGroupTwo']}>
                <label>Ваши пожелания по сайту</label>
                <input type='text' className={styles['popup__input']} name='wishes' />
                <hr/>
              </div>
            </div>
            <button type="submit" className={styles['popup__button']}>Оставить заявку</button>
          </form>
          </div>
          {successPopupVisible && <SuccessPopup open={true} onClose={() => setSuccessPopupVisible(false)}/>}
      </ModalBackground>
    </>
  );
}
