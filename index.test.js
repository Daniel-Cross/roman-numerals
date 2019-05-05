const numerals = require('./index');

describe('numerals', () => {
	const testCases = [
		[ 1, 'I' ],
		[ 2, 'II' ],
		[ 3, 'III' ],
		[ 4, 'IV' ],
		[ 5, 'V' ],
		[ 6, 'VI' ],
		[ 7, 'VII' ],
		[ 8, 'VIII' ],
		[ 9, 'IX' ],
		[ 10, 'X' ],
		[ 11, 'XI' ],
		[ 12, 'XII' ],
		[ 40, 'XL' ],
		[ 46, 'XLVI' ],
		[ 50, 'L' ],
		[ 59, 'LIX' ],
		[ 90, 'XC' ],
		[ 93, 'XCIII' ],
		[ 100, 'C' ],
		[ 141, 'CXLI' ],
		[ 165, 'CLXV' ],
		[ 402, 'CDII' ],
		[ 500, 'D' ],
		[ 575, 'DLXXV' ],
		[ 900, 'CM' ],
		[ 999, 'CMXCIX' ],
		[ 1000, 'M' ],
		[ 1028, 'MXXVIII' ],
		[ 3999, 'MMMCMXCIX' ],
	];

	testCases.forEach(([ input, expected ]) => {
		it(`converts ${input} to ${expected}`, () => {
			expect(numerals(input)).toBe(expected);
		});
	});
	it('throws an error on inputs greater than 3999', () => {
		expect(() => numerals(4000)).toThrow('Value must be a number between 1 and 3999');
	});
	it('throws an error on inputs less than 1', () => {
		expect(() => numerals(0)).toThrow('Value must be a number between 1 and 3999');
	});
	it('throws an error if input is a string', () => {
		expect(() => numerals('one')).toThrow('Value must be a number between 1 and 3999');
	});
});
