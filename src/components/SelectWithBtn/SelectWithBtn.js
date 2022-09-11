import React from "react";
import Select from "react-select";

import styles from "./styles.module.css";

const SelectWithBtn = ({
	selectOptions,
	selectChange,
	buttonClick,
	buttonDisabled,
}) => {
	const selectStyles = {
		container: (styles) => ({
			...styles,
			width: "200px",
			display: "inline-block",
		}),
		control: (styles) => ({
			...styles,
			borderColor: "black",
			borderRadius: "0px",
		}),
	};

	return (
		<div className={styles.select_level}>
			<Select
				placeholder={"Pick mode"}
				options={selectOptions}
				onChange={selectChange}
				styles={selectStyles}
			/>

			<button
				className={styles.bttn}
				onClick={buttonClick}
				disabled={buttonDisabled}
			>
				Start
			</button>
		</div>
	);
};

export default SelectWithBtn;
