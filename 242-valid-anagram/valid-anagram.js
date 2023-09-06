/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
     if (s.length !== t.length) {
    return false;
  }
    const sortedS = s.split('').sort().join('');
  const sortedT = t.split('').sort().join('');

  return sortedS === sortedT;
    // let string1=s, string2=t;
    // if(string1.length !== string2.length){
    //     return false;
    // }
    // let counter={}
    // for(let letter of string1){
    //     counter[letter]= (counter[letter] || 0) + 1;
    // }
    // for(let items of string2){
    //     if(!counter [items]){
    //         return false;
    //     }
    // counter[items] -= 1
    // }
    // return true;
};