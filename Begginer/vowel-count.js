// In this function we return the number of vowels in a given string 
function vowelCount(str){
    const vowels = 'aeiou'
    let count = 0
    for(let i=0;i<str.length;i++){
    if(vowels.includes(str[i])){
    count++
    }
    }
    return count
}
console.log(vowelCount('how are u'));
