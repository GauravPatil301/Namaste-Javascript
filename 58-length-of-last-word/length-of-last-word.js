/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if(s.length==0) return 0;
    let answer = s.trim().split(' ');
    return answer[answer.length-1].length
};