/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    for(let i=0;i<nums.length;i++){
        let idx = Math.abs(nums[i])-1
        let value = nums[idx]
        if(value<0){
            result.push(Math.abs(nums[i]))
        }else{
            nums[idx] = -nums[idx];
        }
    }
    return result;
};