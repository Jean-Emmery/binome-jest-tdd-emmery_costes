const NUMERAL_ONE = 'I';

const FIVE_CONFIG = {
  treshold: 5,
  character: 'V',
}

const TEN_CONFIG = {
  treshold: 10,
  character: 'X',
}

export function handleTresholdCase({number, config}) {
  const {treshold, character} = config;
  let roman = '';

  if ( number === treshold - 1 ) {
    roman += NUMERAL_ONE;
  }
  roman += character;

  if ( number > treshold) {
    roman += numberToRoman(number - treshold);
  }
  return roman;
}

export const numberToRoman = function (number) {
  let roman = '';

  if (number >= TEN_CONFIG.treshold - 1) {
      roman += handleTresholdCase({number, config: TEN_CONFIG});
  } else if (number >= FIVE_CONFIG.treshold - 1) {
      roman += handleTresholdCase({number, config: FIVE_CONFIG});
  } else  {
    for (let i = 0; i < number; i++) {
      roman += NUMERAL_ONE;
    }
  }
  return roman;
}
