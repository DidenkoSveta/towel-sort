
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  if(!matrix) {
    return result
  }
  
  matrix.forEach((item, index) => {
    if (index % 2 !== 0) {
      item.reverse()
    }
    result.push(...item)
  })
  return result;
}
