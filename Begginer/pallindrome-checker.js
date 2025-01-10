function pallindromeChecker(str){
    let reversedString = str.split('').reverse().join('')
    if(str==reversedString){
        console.log('Yes it is a pallindrome');
    }else{
        console.log('Not a pallindrome');
        
    }
}
pallindromeChecker('eye')