const Numerals = (number) => {
	if (number === 1) {
		return 'I';
	} else if (number === 2) {
		return 'II';
	} else if (number === 3) {
		return 'III';
	} else if (number === 4) {
		return 'IV';
	} else if (number === 5) {
		return 'V';
	} else {
		return 'Must be a number between 1 and 3999';
	}
};

module.exports = Numerals;
