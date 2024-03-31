import { IReviewItemProps } from './interface';
import styles from './styles.module.scss';

export default function ReviewCard({ item }: IReviewItemProps) {
	const cardClass = item.hasButton ? styles['review-card-green'] : styles['review-card'];
	return (
		<li className={cardClass}>
		{item.title && (
		<h4 className={styles['review-card__title']}>
			{item.title}
		</h4>
				)}
                {item.photo && (
					<img
                    src={item.photo}
					>
					</img>
				)}
				{item.description && (
					<p
						className={styles['review-card__description']}
					>
						{item.description}
					</p>
				)}
				{item.hasButton && (
					<button
						className={styles['review-card__button']}
					>ОСТАВИТЬ ОТЗЫВ
					</button>
				)}
		</li>
	);
}
