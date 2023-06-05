function analyzeArr(arr) {
  function compareNum(a, b) {
    return a - b;
  }

  const sortedArr = arr.sort(compareNum);
  const object = {
    average: (sortedArr[sortedArr.length - 1] - sortedArr[0]) / 2,
    min: sortedArr[0],
    max: sortedArr[sortedArr.length - 1],
    length: arr.length
  }

  return object
}

module.exports = analyzeArr;