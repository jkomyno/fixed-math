[![Build Status](https://travis-ci.org/jkomyno/fixed-math.svg?branch=master)](https://travis-ci.org/jkomyno/fixed-math)
[![npm version](https://badge.fury.io/js/fixed-math.svg)](https://www.npmjs.com/package/fixed-math)
[![Downloads](https://img.shields.io/npm/dm/fixed-math.svg)](https://www.npmjs.com/package/fixed-math)

# fixed-math

FixedMath is a simple utility function that converts a decimal number using fixed-point notation.
Since it avoids the conversion from number to string that Number.toFixed applies, this package is particularly useful when you care about performance.
It also allows the user to choose the approximation method to be used

------------------------------------------------------------------------------------------------------------------------------------------------------

## Installing

```sh
npm install --save fixed-math
```

## Typings

This package is written in TypeScript.
The following types are exported:

```typescript
export type Method = 'round' | 'ceil' | 'floor';
export type FixedMath = (number: number, precision?: number, method?: Method) => number;
```

## How to import

```js
import fixedMath, { Method, FixedMath } from 'fixed-math';
```

## Usage

Just take a look at the signature of the method:

```typescript
/**
 * @param number The float number to approximate
 * @param precision The number of digits (it must be an integer value) after the decimal point.
 *                  It defaults to 2 digits.
 * @param method The name of the Math.* method used as approximation.
 *               You can choose between 'round', 'ceil' and 'floor'.
 */
const fixedMath: FixedMath = (number, precision = 2, method = 'round');
```

Please take a look at the tests to check out every possible nuance and example of using this package.

## Related packages

- [is-equally-spaced](https://github.com/jkomyno/is-equally-spaced): utility function that given an array of numbers, evaluates wether or not every element is equally spaced, i.e. if every subsequent couple of numbers in the array has the same distance.

## Contributing

Of course PRs are welcome! Before contributing, however, please be sure to run `npm run test:ci` or `yarn test:ci`,
in order to check if the code you wrote respects the linting conventions and if it doesn't break any test. Please
try to keep the unit test code coverage at 100%.
