export type Method = 'round' | 'ceil' | 'floor';
export type FixedMath = (number: number, precision?: number, method?: Method) => number;

/**
 * Converts a decimal number using fixed-point notation, avoiding the conversion from
 * number to string of Number.toFixed, and allowing the user to choose the approximation
 * method to be used.
 * @param number The float number to approximate
 * @param precision The number of digits (it must be an integer value) after the decimal point.
 *                  It defaults to 2 digits.
 * @param method The name of the Math.* method used as approximation.
 *               You can choose between 'round', 'ceil' and 'floor'.
 */
const fixedMath: FixedMath = (number, precision = 2, method = 'round') => {
  if (isNaN(number)) {
    return 0;
  }
  const precisionExp = 10 ** (precision | 0);
  return Math[method](number * precisionExp) / precisionExp;
};

export default fixedMath;
