const array = [1, 1, 1, 1, 2, 2, 3, 3, 4, 5, 5, 5, 5];
const newArray = [];

for (let i = 0; i < array.length; i++) {
  if (!newArray.includes(array[i])) {
    newArray.push(array[i]);
  }
}

console.log(newArray);
