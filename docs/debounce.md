# Debounce

## Definition
The debounce function forces a function to wait a certain amount of time
before running again. The function tends to limit the number of times a function is called.

## Gists
- [JS](/gists/debounce.js)

## Code
```Javascript
const debounce = (cb, ms) => {
  let isCooldown = false;
  return (args) => {
    if (isCooldown) {
      return;
    }
    
    cb.apply(this, args)
    isCooldown = true;
 
    setTimeout(() => isCooldown = false, ms);
  }
}
```
