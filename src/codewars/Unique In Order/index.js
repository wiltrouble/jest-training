export const uniqueOrder = iterable => {
  if (typeof iterable === 'string') {
    var iterable = iterable.split('')
  }
  let newArray = [iterable[0]]
  for (let i = 1; i < iterable.length; i++) {
    if(iterable[i] != iterable[i-1]) {
      newArray.push(iterable[i])
    }
  }
  return newArray
}

export const uniqueInOrder = iterable => {
  var result = []
  var last 
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      result.push(last = iterable[i])
    }
  }
  return result
}