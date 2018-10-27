/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var ans = nums.indexOf(target);
    if(ans !== -1) {
        return ans;
    } else {
        var i;
        for(i= 0;nums[i] < target;i++) {
            
        }
        return i;
    }
};