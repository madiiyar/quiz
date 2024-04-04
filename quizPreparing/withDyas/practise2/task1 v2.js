let text = "asoidhyuiv";

function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let VowelsAmount = 0
    for (let i = 0; i < str.length; i++) {
        if(vowels.includes(str[i]) == true){
            VowelsAmount++;
        }
    }
    return VowelsAmount
}
console.log(countVowels(text));