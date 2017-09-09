// https://leetcode.com/problems/reverse-string/description/

/*********************************************************
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*********************************************************/

/* Solution */
var reverseString = function(s) {
    return s.split("").reverse().join("");
};