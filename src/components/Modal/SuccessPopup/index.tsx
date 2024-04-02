import ModalBackground from "../../ModalBackground"
import styles from './styles.module.scss'
import { ModalProps } from "../index"

export default function SuccessPopup({ onClose }: ModalProps) {
  return (
    <ModalBackground zindex="900" onClick={onClose}>
    <div className={styles['successPopup']}>
        <div className={styles['successPopup__message']}>
            Заявка успешно отправлена!
        </div>
        </div>
  </ModalBackground>
  )
}
