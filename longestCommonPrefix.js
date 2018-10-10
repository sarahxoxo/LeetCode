// solution 1

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return "";

    var same = strs[0];

    for(var i = 1; i < strs.length; i++){
        var str = strs[i];
        var j = 0;
        for(;j < same.length; j++){
           if(same[j] !== str.charAt(j)){
                break;
           } 
        }
        same = same.slice(0,j);
    }

    return same;
};

// solution 2

/**
 * @param {string[]} strs
 * @return {string}
 */

//horizontal scanning
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""
    let prefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix.isEmpty) return ""
        }
    }
    return prefix
};