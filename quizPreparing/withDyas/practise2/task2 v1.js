// task2 
// generation od random password

function generatePassword(n){
    const passwordLength = n;
    const numsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let num0_or_abc1= Math.floor(Math.random() * 2);

        if (num0_or_abc1 == 0){
            password += numsArray[Math.floor(Math.random() * numsArray.length)];
            console.log(numsArray[Math.floor(Math.random() * numsArray.length)]);
        } else{
            password += abcArray[Math.floor(Math.random() * abcArray.length)]
            console.log(abcArray[Math.floor(Math.random() * abcArray.length)]);
        }
    }
    return password
}

console.log(generatePassword(8));