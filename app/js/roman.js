export const numberToRoman = function (number) {
  let roman = '';

  if (number >= 9) {
    if ( number === 9 ) {
      roman += 'I';
    }
    roman += 'X';
  } else if (number >= 4) {
    if ( number === 4 ) {
      roman += 'I';
    }
    roman += 'V';

    if ( number > 5 ) {
      roman += numberToRoman(number - 5);
    }
  } else  {
    for (let i = 0; i < number; i++) {
      roman += 'I';
    }
  }
  return roman;
}
