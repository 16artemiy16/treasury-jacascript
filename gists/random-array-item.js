const randomArrayItem = (array) => {
  const min = 0;
  const max = array.length - 1;
  const randInt = Math.round(min - 0.5 + Math.random() * (max - min + 1));

  return array[randInt];
}
