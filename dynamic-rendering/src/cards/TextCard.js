import React from "react";
import styles from "./Card.module.css";

export default function TextCard(props) {
	return (
		<div className={styles.Card} style={{ width: "220px", padding: "10px" }}>
			<h3>{props.name}</h3>
			<p>{props.content}</p>
		</div>
	);
}
