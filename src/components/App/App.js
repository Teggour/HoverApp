import React, { useState } from "react";

import SelectWithBtn from "../SelectWithBtn/SelectWithBtn";
import Loader from "../Loader/Loader";
import HoveredSquares from "../HoveredSquares/HoveredSquares";
import FieldsBlock from "../FieldsBlock/FieldsBlock";

import useFetch from "../../hooks/useFetch";
import formatData from "../../utills/formaData";

import styles from "./styles.module.css";

function App() {
	const [start, setStart] = useState(false);
	const [size, setSize] = useState(5);
	const [selectedLevel, setSelectedLevel] = useState("");
	const [selectedFields, setSelectedFields] = useState([]);

	const { data, loading, error } = useFetch("http://demo7919674.mockable.io");

	const dropdownOptions = formatData(data);

	const handleChange = (selected) => {
		setSelectedLevel(selected.label);
	};

	const handleClick = (e) => {
		e.preventDefault();

		setSelectedFields([]);
		setSize(
			dropdownOptions.find((option) => option.label === selectedLevel)
				.value
		);
		setStart(true);
	};

	return (
		<div>
			<div className={styles.wrapper}>
				{!!loading && <Loader />}

				{!!error && <>{error.message}</>}

				{!!data && (
					<>
						<SelectWithBtn
							selectOptions={dropdownOptions}
							selectChange={handleChange}
							buttonClick={handleClick}
							buttonDisabled={!selectedLevel}
						/>

						{start && (
							<div className={styles.main}>
								<FieldsBlock
									size={size}
									selectedFields={selectedFields}
									setSelectedFields={setSelectedFields}
								/>

								<HoveredSquares
									selectedFields={selectedFields}
								/>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
}

export default App;
