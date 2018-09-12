[![Build Status](https://travis-ci.org/jkomyno/fixed-math.svg?branch=master)](https://travis-ci.org/jkomyno/fixed-math)
[![npm version](https://badge.fury.io/js/fixed-math.svg)](https://www.npmjs.com/package/fixed-math)
[![Downloads](https://img.shields.io/npm/dm/fixed-math.svg)](https://www.npmjs.com/package/fixed-math)

# fixed-math

FixedMath is a simple utility function that converts a decimal number using fixed-point notation.
Since it avoids the conversion from number to string that Number.toFixed applies, this package is particularly useful when you care about performance.
It also allows the user to choose the approximation method to be used

------------------------------------------------------------------------------------------------------------------------------------------------------

## Installing

- with npm:
```sh
npm install --save fixed-math
```

- with yarn
```sh
yarn add fixed-math
```

## Typings

This package is written in TypeScript and is designed to be compatible with NodeJS 6+.
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

## Contributing
Of course PRs are welcome!
