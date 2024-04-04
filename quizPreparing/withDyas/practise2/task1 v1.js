let a = 15;
let b = 17;
function isPrime(n){
    count = 0
    for (let i = 1; i <= n; i++) {
        if (n % i == 0){
            count++
        } 
    }
    console.log(count);
    if (count == 2){
        return true
    }else{
        return false
    }
}
console.log(isPrime(a));
console.log(isPrime(b));