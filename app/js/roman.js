export const numberToRoman = function (number) {
    let roman = '';
    for (let i = 0; i < number; i++) {
      roman += 'I';
    }
    return roman;
  }
