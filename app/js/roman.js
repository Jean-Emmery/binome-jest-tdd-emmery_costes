const NUMERAL_ONE = 'I';
const FIFTY_CONFIG = {
    threshold: 50,
    character: 'L',
    stepDownAmount: 10,
    stepDownCharacter: 'X'
}

const ROMAN_CONFIG = [
    {
        threshold: 10,
        character: 'X',
        stepDownAmount: 1,
        stepDownCharacter: 'I'
    },
    {
        threshold: 5,
        character: 'V',
        stepDownAmount: 1,
        stepDownCharacter: 'I'
    }
];

export function handleTresholdCase({number, config}) {
    const {threshold, character, stepDownAmount, stepDownCharacter} = config;

    let roman = '';

    if (number === threshold - stepDownAmount) {
        roman += stepDownCharacter;
    }
    roman += character;

    if (number > threshold) {
        roman += numberToRoman(number - threshold);
    }
    return roman;
}

export const numberToRoman = function (number) {
    const {threshold, character, stepDownAmount, stepDownCharacter} = FIFTY_CONFIG;

    if (number >= threshold - stepDownAmount) {
        let roman = '';
        if (number !== threshold) {
            roman += stepDownCharacter;
        }
        roman += character;
        if(number !== threshold) {
            roman += numberToRoman(number - (threshold - stepDownAmount));
        }
        return roman;
    }

    for (let i = 0; i < ROMAN_CONFIG.length; i++) {
        const config = ROMAN_CONFIG[i];
        if (number >= config.threshold - 1) {
            return handleTresholdCase({number, config});
        }
    }
    let roman = '';
    for (let i = 0; i < number; i++) {
        roman += NUMERAL_ONE;
    }
    return roman;
}
