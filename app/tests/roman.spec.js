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

        it('should return XV for 15', () => {
            expect(numberToRoman(15)).toBe('XV');
        });

        it('should return XX for 20', () => {
            expect(numberToRoman(20)).toBe('XX');
        });

        it('should return XXXIX for 39', () => {
            expect(numberToRoman(39)).toBe('XXXIX');
        });

        it('should return XL for 40', () => {
            expect(numberToRoman(40)).toBe('XL');
        });

        it('should return XLI for 41', () => {
            expect(numberToRoman(41)).toBe('XLI');
        });

        it('should return XLII for 42', () => {
            expect(numberToRoman(42)).toBe('XLII');
        });

        it('should return XLIX for 49', () => {
            expect(numberToRoman(49)).toBe('XLIX');
        });

        it('should return L for 50', () => {
            expect(numberToRoman(50)).toBe('L');
        });

        it('should return LIX for 59', () => {
            expect(numberToRoman(59)).toBe('LIX');
        });

        it('should return XC for 90', () => {
            expect(numberToRoman(90)).toBe('XC');
        });

        it('should return C for 100', () => {
            expect(numberToRoman(100)).toBe('C');
        });

        it('should return CI for 101', () => {
            expect(numberToRoman(101)).toBe('CI');
        });

        it('should return CXCIX for 199', () => {
            expect(numberToRoman(199)).toBe('CXCIX');
        });

        it('should return D for 500', () => {
            expect(numberToRoman(500)).toBe('D');
        });

        it('should return DI for 501', () => {
            expect(numberToRoman(501)).toBe('DI');
        });
    });
});
