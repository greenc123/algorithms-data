// https://leetcode.com/problems/range-sum-query-immutable/

/**
Given an integer array nums,
find the sum of the elements between indices i and j i ≤ j),
inclusive.

Example:
Given nums = [-2, 0, 3, -5, 2, -1]

sumRange(0, 2) -> 1
sumRange(2, 5) -> -1
sumRange(0, 5) -> -3

Note:
You may assume that the array does not change.
There are many calls to sumRange function.
**/

var NumArray = function(nums) {
  this.sum = []
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i]
    this.sums.push(sum)
  }
};

NumArray.prototype.sumRange = function(i, j) { 
  return this.sums[j] - (i > 0 ? this.sums[i - 1] : 0);
};