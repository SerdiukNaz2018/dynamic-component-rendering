import React from "react";
import ContainerCard from "./cards/ContainerCard";
import ImageCard from "./cards/ImageCard";
import TextCard from "./cards/TextCard";

const renderCards = cards => {
	const cardsTypes = {
		IMAGE_CARD: ImageCard,
		TEXT_CARD: TextCard,
		CONTAINER_CARD: ContainerCard,
	};

	return (
		<React.Fragment>
			{cards.map((card, index) => {
				const CardType = cardsTypes[card.type];
				return <CardType key={index} {...card} />;
			})}
		</React.Fragment>
	);
};

export default renderCards;
