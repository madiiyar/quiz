const array = ["apple", "banana", "arkin", "nurdos"];

function Nurdos(arr, num) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      arr2.push(arr[i]);
    }
  }
  console.log(arr2);
}

Nurdos(array, 5);
