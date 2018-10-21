/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Solution 1

var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    return haystack.indexOf(needle);
};

// Solution 2

var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    if(!haystack || needle.length > haystack.length) return -1;
    var i,j;
    
    for(i = 0 ; i < haystack.length ; i++){
       var str = haystack.substr(i,needle.length);
       if(str == needle){
           return i;
       }
    }
    return -1;
};