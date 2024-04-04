alphabit = "webmaster";
function alphabit_order(str) {
    array = []
    for (let i = 0; i < str.length; i++) {
         a = alphabit[i].split();
         
        array =  array.concat(a)
    };
    array.sort();
    console.log(array);
    let text = "";
    for (let i = 0; i < array.length; i++) {
        text += String(array[i])
    }
    return str = text
}

console.log(alphabit_order(alphabit));
