//https://leetcode.com/problems/hamming-distance/description/

/***************************************************
The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:
Input: x = 1, y = 4
Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑
The above arrows point to positions where the corresponding bits are different.
****************************************************/

/************************
things you should know before
-------------------------
Boolean Operators
XOR -> Equal inputs give 0. Non equal inputs give 1.
AND -> 1 AND 1 gives 1. Ant other input gives 0.

************************/
/* Solution */
var hammingDistance = function(x, y) {
    var result = (x ^ y); //XOR
    var count = 0;
  
    while(result > 0) {
       result = (result & result - 1) ; //AND
       count++;

    }
	return count;
};

hammingDistance(1,4);
