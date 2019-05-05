const ROMAN = {
	M: 1000,
	CM: 900,
	D: 500,
	CD: 400,
	C: 100,
	XC: 90,
	L: 50,
	XL: 40,
	X: 10,
	IX: 9,
	V: 5,
	IV: 4,
	I: 1,
};

const numerals = (number) => {
	if (number < 1 || number > 3999 || isNaN(number)) {
		throw new Error('Value must be a number between 1 and 3999');
	}

	let result = '';
	const numerals = Object.keys(ROMAN);

	numerals.forEach((key) => {
		if (number >= ROMAN[key]) {
			result += key.repeat(Math.floor(number / ROMAN[key]));
			number -= ROMAN[key] * Math.floor(number / ROMAN[key]);
		}
	});

	return result;
};

module.exports = numerals;
