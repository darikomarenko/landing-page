import { ReactNode, useState } from 'react';
import styles from './styles.module.scss';

interface ModalBackgroundProps {
  children: ReactNode;
  zindex?: string;
  onClick?: () => void;
}

export default function ModalBackground({
  children,
  onClick,
  zindex,
}: ModalBackgroundProps) {
  const [childrenVisible, setChildrenVisible] = useState(true);

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.target === event.currentTarget && onClick) {
      onClick();
      setChildrenVisible(false);
    }
  };

  return childrenVisible ? (
    <div
      onClick={(event) => handleClick(event)}
      className={`${styles['modal-background']} ${styles['modal-background_show']}`}
      style={{ zIndex: zindex }}
    >
      {children}
    </div>
  ) : null;
}
