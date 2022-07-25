import ButtonFavorite from '../button-favorite/button-favorite';

import { CardStatus } from '../../const';
import { Offer } from '../../types/offers';
import { StatusRoomProps } from '../../types/premium';

type CardRoomProps = {
	offer: Offer,
	cardActive?: boolean,
};

type DefineRating = (rating: number) => number;

const defineRating: DefineRating = (rating) => {
	const definedRating = (rating / 5) * 100;

	return definedRating;
}

function StatusRoom({ isPremium }: StatusRoomProps): JSX.Element {
	return (
		<>
			{isPremium ? <div className="place-card__mark">
				<span>Premium</span>
			</div> : null}
		</>
	)
}

function CardRoom(props: CardRoomProps): JSX.Element {
	const { offer, cardActive } = props;
	const {
		id,
		title,
		isFavorite,
		price,
		isPremium,
		typeRoom,
		rating,
		previewImage,
	} = offer;

	const definedRating = defineRating(rating)

	return (
		<article className="cities__card place-card" key={id} style={{opacity: `${cardActive ? CardStatus.ACTIVE : CardStatus.NO_ACTIVE}`}}>
			{isPremium ? <StatusRoom isPremium /> : <StatusRoom />}
			<div className="cities__image-wrapper place-card__image-wrapper">
				<a href="#">
					<img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
				</a>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">&euro;{price}</b>
						<span className="place-card__price-text">&#47;&nbsp;night</span>
					</div>
					{isFavorite ? <ButtonFavorite isFavorite /> : <ButtonFavorite />}
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{ width: `${definedRating}%` }}></span>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<a href="#">{title}</a>
				</h2>
				<p className="place-card__type">{typeRoom}</p>
			</div>
		</article>
	);
}

export default CardRoom;
