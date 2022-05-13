const ROMAN_CONFIG = [
    {
        character: 'C',
        value: 100,
        stepDownAmount: 10,
    },
    {
        character: 'L',
        value: 50,
        stepDownAmount: 10,
    },
    {
        character: 'X',
        value: 10,
        stepDownAmount: 1,
    },
    {
        character: 'V',
        value: 5,
        stepDownAmount: 1,
    },
    {
        character: 'I',
        value: 1,
        stepDownAmount: 0,
    },
];

function handleThresholdCase({number, config}) {
    const {value, character, stepDownAmount} = config;

    let numeral = '';
    let remainder = number - value;
    if (number < value) {
        const stepDownCharacter = ROMAN_CONFIG.find(
            c => c.value === stepDownAmount,
        ).character;
        numeral += stepDownCharacter;
        remainder += stepDownAmount;
    }
    numeral += character;
    numeral += numberToRoman(remainder);
    return numeral;
}

export function numberToRoman(number) {
    for (let i = 0; i < ROMAN_CONFIG.length; i += 1) {
        const config = ROMAN_CONFIG[i];
        const {value, stepDownAmount} = config;
        if (number >= value - stepDownAmount) {
            return handleThresholdCase({
                number,
                config,
            });
        }
    }

    return '';
}
