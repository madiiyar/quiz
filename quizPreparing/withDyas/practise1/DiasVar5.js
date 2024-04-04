let num = 3;
function factorial(n){
    let count = 1
    for (let i = 1; i <= n; i++) {
        count = i  * count;
    }
    return count
}
console.log(factorial(num));