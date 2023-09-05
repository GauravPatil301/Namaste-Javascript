const arr = [5,1,3,,2,6];
//filter odd values
function isOdd(x){
    return x%2;
}
const output = arr.filter(isOdd);
console.log(output);
function isEven(x){
    return x%2 ===0;
}
const output1 =arr.filter(isEven);
console.log(output1);
function greaterFour(x){
    return x>4;
}
const output2 =arr.filter(greaterFour);
console.log(output2);
const output3 =arr.filter(function greaterThree(x){
    return x>3;
});
console.log(output3);

const output4 = arr.filter((x) => x>4);
console.log(output4); 
