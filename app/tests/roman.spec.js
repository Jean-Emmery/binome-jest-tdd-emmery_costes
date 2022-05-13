import {numberToRoman} from "../js/roman.js";

describe('Roman', () => {
    describe('numberToRoman', () => {
        it('should return I for 1', () => {
            expect(numberToRoman(1)).toBe('I');
        });
    });
});
