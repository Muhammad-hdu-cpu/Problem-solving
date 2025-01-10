// In this problem we will a string reads same as backword if is console 
// yes otherhand no 

function pallindromeChecker(str){
    let reversedString = str.split('').reverse().join('')
    if(str==reversedString){
        console.log('Yes it is a pallindrome');
    }else{
        console.log('Not a pallindrome');
        
    }
}
pallindromeChecker('eye')