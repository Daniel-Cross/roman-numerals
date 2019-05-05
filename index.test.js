const Numerals = require('./index');

describe('ROMAN_NUMERALS', () => {
	it('returns the numeral I when 1 is entered', () => {
		expect(Numerals(1)).toBe('I');
	});

	it('returns the numeral II when 2 is entered', () => {
		expect(Numerals(2)).toBe('II');
	});

	it('returns the numeral III when 3 is entered', () => {
		expect(Numerals(3)).toBe('III');
	});

	it('returns the numeral IV when 4 is entered', () => {
		expect(Numerals(4)).toBe('IV');
	});

	it('returns the numeral V when 5 is entered', () => {
		expect(Numerals(5)).toBe('V');
	});

	it('returns an error message when a negative number is entered', () => {
		expect(Numerals(-2)).toBe('Must be a number between 1 and 3999');
	});

	it('returns an error message when a number over 3999 entered', () => {
		expect(Numerals(4000)).toBe('Must be a number between 1 and 3999');
	});
});
