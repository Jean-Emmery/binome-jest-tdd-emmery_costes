export const numberToRoman = function (number) {
  if (number === 4 || number === 5) {
    let roman = '';
    if ( number === 4 ) {
      roman += 'I';
    }
    roman += 'V';
    return roman;
  } else  {
    let roman = '';
    for (let i = 0; i < number; i++) {
      roman += 'I';
    }
    return roman;
  }
  }
