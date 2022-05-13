const NUMERAL_ONE = 'I';

const ROMAN_CONFIG = [
    {
        treshold: 10,
        character: 'X',
    },
    {
        treshold: 5,
        character: 'V',
    }
];

export function handleTresholdCase({number, config}) {
    const {treshold, character} = config;

    let roman = '';

    if (number === treshold - 1) {
        roman += NUMERAL_ONE;
    }
    roman += character;

    if (number > treshold) {
        roman += numberToRoman(number - treshold);
    }
    return roman;
}

export const numberToRoman = function (number) {
    if (number === 40 ){
        return 'XL';
    }
    for (let i = 0; i < ROMAN_CONFIG.length; i++) {
        const config = ROMAN_CONFIG[i];
        if (number >= config.treshold - 1) {
            return handleTresholdCase({number, config});
        }
    }
    let roman = '';
    for (let i = 0; i < number; i++) {
        roman += NUMERAL_ONE;
    }
    return roman;
}
