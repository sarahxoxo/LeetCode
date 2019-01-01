/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0]
    // method 1
    // nums.join().split(',')
    // let arr = []
    // arr.push(nums[0])
    // for (let i = 1;i < nums.length;i++) {
    //     if (arr.indexOf(nums[i]) !== -1) {
    //         arr.splice(arr.indexOf(nums[i]), 1)
    //     } else {
    //         arr.push(nums[i])
    //     }
    // }
    // return arr[0]
    
    // method 2
    // let result = 0;
    // for(let i = 0; i < nums.length; i++) {
    //     result ^= nums[i]
    // }
    // return result;
    
    // method 3
    return nums.reduce((pre, cur) => pre ^ cur)
    // equals to below
    // return nums.reduce(function(pre, cur) { return pre ^ cur})
    
};