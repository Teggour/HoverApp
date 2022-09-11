import isEqual from "lodash.isequal";

export const isActiveField = (activeFields, currentField) => {
	for (let i = 0; i < activeFields.length; i++) {
		if (isEqual(activeFields[i], currentField)) return true;
	}
	return false;
};

export const getActiveFieldIndex = (activeFields, currentField) => {	
	for (let i = 0; i < activeFields.length; i++) {
		if (isEqual(activeFields[i], currentField)) return i;
	}

	return -1;
};
