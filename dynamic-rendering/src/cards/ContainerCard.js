import React from "react";
import styles from "./Card.module.css";
import renderCardsDynamically from "../cardsRenderer";

export default function ContainerCard(props) {
	return (
		<div className={styles.Card}>
			<h2>{props.title}</h2>
			{renderCardsDynamically(props.sub_cards)}
		</div>
	);
}
