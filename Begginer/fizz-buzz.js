// We will explain the problem here 
// The problem says we have to generate 1 to 100 for 
// those numbers divide
// by 3 we will print fizz for numbers divide by 5 print buzz 
// the numbers divide by 3 and 5 both will print fizzbuzz 
// other wise the number 

function fizzbuzz() {
    for (let i = 1; i <= 100; i++) {
        let output = "";
        
        if (i % 3 === 0) output += "Fizz";
        if (i % 5 === 0) output += "Buzz";
        
        console.log(output || i);
    }
}

fizzbuzz();
