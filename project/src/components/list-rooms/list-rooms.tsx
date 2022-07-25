import CardRoom from '../card/card-room';

import { Offers } from '../../types/offers';

type ListRoomsPorps = {
	offers: Offers,
}
function ListRooms({offers}: ListRoomsPorps): JSX.Element {
	
	return (
		<div className="cities__places-list places__list tabs__content">
			{offers.map((offer, index) => {
				if (index === 0) {
					return <CardRoom offer={offer} cardActive />
					
				} 
				
				return <CardRoom offer={offer} />
			})}
		</div>
	)
}

export default ListRooms;