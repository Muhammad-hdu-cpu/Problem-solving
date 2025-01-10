function sumOfArray(arr) {
  let sum = 0;
  arr.forEach((v) =>{
    sum+=v
  });
  return sum
}
console.log(sumOfArray([1,2,3,4]));
