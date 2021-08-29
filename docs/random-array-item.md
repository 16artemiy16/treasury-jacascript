# Random array item

## Definition
This function will pick a random item from a given array. 
This uses the same algorithm as [randomInt()](./random-int.md) for randomization.

## Gists 
- [JS](../gists/random-array-item.js)

## Code
Will select an int from min inclusively to max inclusively.
```Javascript
const randomArrayItem = (array) => {
  const min = 0;
  const max = array.length - 1;
  const randInt = Math.round(min - 0.5 + Math.random() * (max - min + 1));

  return array[randInt];
}

```

