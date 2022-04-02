const arr = [5,1,3,2,6];
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}
const output2 =arr.map(function binary(x){
    return x.toString(2);
});
const output3 = arr.map((x) => x.toString(2));
const output1 = arr.map(binary);
const output = arr.map(triple);
console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);