import React from "react";
import styles from "./Card.module.css";

export default function ImageCard(props) {
	return (
		<div className={styles.Card} style={{ width: "220px", padding: "10px" }}>
			<h3>{props.name}</h3>
			<img src={props.source} width={190} />
		</div>
	);
}
