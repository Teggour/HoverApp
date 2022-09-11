import React from "react";
import styles from "./styles.module.css";

const HoveredSquares = ({ selectedFields }) => {
	return (
		<div className={styles.hovered_squares}>
			<div className={styles.title}>
				Hovered squares: {"\n"}(Total count - {selectedFields.length})
			</div>

			{!!selectedFields.length && (
				<div className={styles.scrollable}>
					{selectedFields.map((field) => (
						<div className={styles.selected_field}>{`Row: ${
							field[0] + 1
						}, Col: ${field[1] + 1}`}</div>
					))}
				</div>
			)}
		</div>
	);
};

export default HoveredSquares;
