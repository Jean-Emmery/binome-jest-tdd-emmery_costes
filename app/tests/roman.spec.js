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
    });
});
