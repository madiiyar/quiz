const array = [2, 2, 2, 1, 1, 4, 6, 7, 8, 5, 4];

function Count(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (target == arr[i]) {
      count++;
    }
  }
  console.log(count);
}
Count(array, 1);
