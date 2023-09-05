const arr =[5,1,2,3,6];
//sum or max
function findSum(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum =sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//Using reduce function
const output= arr.reduce(
    function(acc,curr){
        acc=acc+curr;
        return acc;
    },0);
console.log(findSum(arr));

//Finding Max
function findMax(arr){
   let max=0;
   for(let i=0;i<arr.length;i++){
       if(arr[i]>max){
            max = arr[i];
       }
   }
   return max;
}
console.log(findMax(arr));

// Using reduce finding Max
const output1 =arr.reduce(function(max,curr){
    if(curr>max){
        max = curr;
    }
    return max;
},0);
console.log(output1);