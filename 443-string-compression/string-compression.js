/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let currentIndex = 0;
  let count = 1;

  for (let i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      count++;
    } else {
      chars[currentIndex] = chars[i - 1];
      currentIndex++;

      if (count > 1) {
        const countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
          chars[currentIndex] = countStr[j];
          currentIndex++;
        }
      }

      count = 1;
    }
  }

  return currentIndex;
};
