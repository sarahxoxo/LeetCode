/*
 * @param {string} s
 * @return {number}
 */

/* solution 1 */
var lengthOfLastWord = function(s) {
    // stripp the annoying whitespaces from both ends of string
    s = s.trim();
    var arr = s.split(' ');
    
    return (arr[arr.length-1]).length;
};

/* solution 2 */
var lengthOfLastWord = function(s) {
    // stripp the annoying whitespaces from both ends of string
    s = s.trim();
    // iterate from the end of string, stop until the first whitespace encounter
    let len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " ") {
            break;
        }
        else {
            len++;
        }
    }
    return len
};