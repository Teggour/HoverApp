import React from "react";

import { isActiveField, getActiveFieldIndex } from "../../utills/activeField";
import filterByIndex from "../../utills/filterByIndex";

import styles from "./styles.module.css";

const FieldsBlock = ({ size, selectedFields, setSelectedFields }) => {
	const handleMouseEnter = (i, j) => () => {
		const currFieldIndex = getActiveFieldIndex(selectedFields, [i, j]);

		const newSelectedFields =
			currFieldIndex === -1
				? [...selectedFields, [i, j]]
				: filterByIndex(selectedFields, currFieldIndex);

		setSelectedFields(newSelectedFields);
	};

	const getClassName = (i, j) =>
		isActiveField(selectedFields, [i, j])
			? `${styles.cell} ${styles.blue}`
			: styles.cell;

	return (
		<div>
			{Array.from(Array(size)).map((_, i) => (
				<div className={styles.row} key={i}>
					{Array.from(Array(size)).map((_, j) => (
						<div
							key={`${i}${j}`}
							className={getClassName(i, j)}
							onMouseEnter={handleMouseEnter(i, j)}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default FieldsBlock;
