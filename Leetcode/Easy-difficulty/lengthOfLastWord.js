// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
var lengthOfLastWord = function(s) {
    let wordsArray = s.trim().split(' ')
    return wordsArray[wordsArray.length-1].length
    
};
console.log(lengthOfLastWord('  Hello Baba   '));
