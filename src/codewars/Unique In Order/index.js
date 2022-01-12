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

export const uniqueInOrder2 = iterable => {
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}

export const uniqueInOrder3 = iterable => {
  return [].filter.call(iterable, ((a, i) => {return iterable[i-1] !== a}))
}

export const uniqueInOrder4 = iterable => {
  let res = []
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i+1]) {
      res.push(iterablepi)
    }
  }
  return res;
}

export const uniqueInOrder5 = iterable => {
  var result = []
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i-1] === undifined || iterable[i-1] !== iterable[i]) {
      result.push(iterable[i])  
    }    
  }
  return result;
}

const uniqueInOrder6 = d => [...d].filter((x, i, a) => a != a[i + 1])