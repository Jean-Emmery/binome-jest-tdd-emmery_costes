import {numberToRoman} from "../js/roman.js";

describe('Roman', () => {
    describe('numberToRoman', () => {
        it('should return I for 1', () => {
            expect(numberToRoman(1)).toBe('I');
        });

        it('should return II for 2', () => {
            expect(numberToRoman(2)).toBe('II');
        });

        it('should return III for 3', () => {
            expect(numberToRoman(3)).toBe('III');
        });

        it('should return IV for 4', () => {
            expect(numberToRoman(4)).toBe('IV');
        });

        it('should return V for 5', () => {
            expect(numberToRoman(5)).toBe('V');
        });

        it('should return VI for 6', () => {
            expect(numberToRoman(6)).toBe('VI');
        });

        it('should return VII for 7', () => {
            expect(numberToRoman(7)).toBe('VII');
        });

        it('should return VIII for 8', () => {
            expect(numberToRoman(8)).toBe('VIII');
        });

        it('should return IX for 9', () => {
            expect(numberToRoman(9)).toBe('IX');
        });

        it('should return X for 10', () => {
            expect(numberToRoman(10)).toBe('X');
        });

        it('should return XI for 11', () => {
            expect(numberToRoman(11)).toBe('XI');
        });

        it('should return XII for 12', () => {
            expect(numberToRoman(12)).toBe('XII');
        });

        it('should return XIII for 13', () => {
            expect(numberToRoman(13)).toBe('XIII');
        });

        it('should return XIV for 15', () => {
            expect(numberToRoman(15)).toBe('XV');
        });

        it('should return XV for 20', () => {
            expect(numberToRoman(20)).toBe('XX');
        });

        it('should return XX for 39', () => {
            expect(numberToRoman(39)).toBe('XXXIX');
        });

        it('should return XXX for 40', () => {
            expect(numberToRoman(40)).toBe('XL');
        });

        it('should return XL for 41', () => {
            expect(numberToRoman(41)).toBe('XLI');
        });

        it('should return XLI for 42', () => {
            expect(numberToRoman(42)).toBe('XLII');
        });

        it('should return XLII for 49', () => {
            expect(numberToRoman(49)).toBe('XLIX');
        });

        it('should return XLIX for 50', () => {
            expect(numberToRoman(50)).toBe('L');
        });
    });
});
