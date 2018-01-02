//https://leetcode.com/problems/judge-route-circle/description/

/***************************************************
Initially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to the original place.

The move sequence is represented by a string. And each move is represent by a character. The valid robot moves are R (Right), L (Left), U (Up) and D (down). The output should be true or false representing whether the robot makes a circle.

Example 1:
Input: "UD"
Output: true
Example 2:
Input: "LL"
Output: false

****************************************************/

/* Solution */
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    if (moves.length % 2 === 1) {
        return false;
    } else {
        var step = moves.split("");
        var x = 0;
        var y = 0;

        for(var i = 0;i < step.length;i++) {
            if(step[i] === "U") {
              y++;
            } else if(step[i] === "D") {
              y--;
            } else if(step[i] === "R") {
              x++;
            } else {
              x--;
            }
        } 
      if(x === 0 && y ===0) {
        return true;
      } else {
        return false;
      }
      
    }
};
