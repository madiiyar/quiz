let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function filterEvenNumber(array) {
    let arrayEven = [];
    for (let i = 0; i < array.length; i++) {
        if( array[i] % 2 ==0){
            arrayEven.push(array[i]);
        }
    }

    return arrayEven;
}

console.log(filterEvenNumber(arrayNum));