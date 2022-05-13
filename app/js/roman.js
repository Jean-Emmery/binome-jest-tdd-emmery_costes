const NUMERAL_ONE = 'I';
const FIRST_TRESHOLD = 5;
const SECOND_TRESHOLD = 10;

export const numberToRoman = function (number) {
  let roman = '';

  if (number >= SECOND_TRESHOLD - 1) {
    if ( number === SECOND_TRESHOLD - 1 ) {
      roman += NUMERAL_ONE;
    }
    roman += 'X';

    if ( number > SECOND_TRESHOLD) {
      roman += numberToRoman(number - SECOND_TRESHOLD);
    }
  } else if (number >= FIRST_TRESHOLD - 1) {
    if ( number === FIRST_TRESHOLD - 1 ) {
      roman += NUMERAL_ONE;
    }
    roman += 'V';

    if ( number > FIRST_TRESHOLD ) {
      roman += numberToRoman(number - FIRST_TRESHOLD);
    }
  } else  {
    for (let i = 0; i < number; i++) {
      roman += NUMERAL_ONE;
    }
  }
  return roman;
}
