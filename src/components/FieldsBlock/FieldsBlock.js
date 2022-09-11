import React from "react";
import isEqual from "lodash.isequal";
import uniqWith from "lodash.uniqwith";

import styles from "./styles.module.css";

const FieldsBlock = ({ size, selectedFields, setSelectedFields }) => {
	const handleMouseEnter = (i, j) => () =>
		setSelectedFields(uniqWith([...selectedFields, [i, j]], isEqual));

	const getClassName = (i, j) =>
		selectedFields.find((el) => isEqual(el, [i, j]))
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
