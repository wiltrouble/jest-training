export const diamond = n => {
  if (n <= 0 || n % 2 === 0) {
    return null
  }
  let str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}

export const diamond2 = n => {
  if (n % 2  == 0 || n < 1) return null
  var x = 0, add, diam = line(x,n)
  while((x+=2) < n) {
    add = line(x/2, n-x)
    diam = add+diam+add;
  }
  return diam;
}