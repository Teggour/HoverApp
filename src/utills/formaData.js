const formatData = (data) =>
	!!data
		? data.map((option) => ({
				label: option.name,
				value: option.field,
		  }))
		: [];

export default formatData;