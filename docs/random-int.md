# Random integer

## Definition
There is no native way in JS to generate a random integer, but it is sometimes a
very useful function in applications.

## Gists
- [JS](/gists/random-int.js)

## Code
```Javascript
const randomInt = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
```
