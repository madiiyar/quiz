const array = [1, 3, 5, 2, 5, 6, 7, 3, 6];

function reverseArr(arr) {
  newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
}

reverseArr(array);
