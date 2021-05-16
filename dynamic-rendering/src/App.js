import React from "react";
import renderCardsDynamically from "./cardsRenderer";

export default function App() {
	const cards = [
		{
			id: 1,
			name: "Card 1",
			title: "Card 1 content",
			type: "CONTAINER_CARD",
			sub_cards: [
				{
					id: 1,
					name: "Image Card",
					type: "IMAGE_CARD",
					source: "https://images.unsplash.com/photo-1618421770676-356cce7a9c9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
				},
				{
					id: 2,
					name: "Card 2",
					type: "TEXT_CARD",
					content: "Text card Content",
				},
			],
		},
		{
			id: 2,
			name: "Card 2",
			type: "IMAGE_CARD",
			source: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
		},
		{
			id: 2,
			name: "Card 3",
			type: "TEXT_CARD",
			content: "Card 3 Content",
		},
	];

	return <React.Fragment>{renderCardsDynamically(cards)}</React.Fragment>;
}
