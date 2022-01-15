export const orderWeight = string => {
  string = string.split(" ")
  let sum = 0;

  const weightMap = new Map()
  
  for (let i = 0; i < string.length; i++) {
    // console.log(string[i]);
    let number = string[i].split('')
    let sum = 0
    let text = ''
    let y = 0
    let x = 0
    for (let j = 0; j < number.length; j++) {
      sum += parseInt(number[j])
      // console.log(sum);
      text = sum.toString()
    }
    weightMap.set(new Date(), string[i]+sum)
    let n = 0
    while (n < number.length) {
      sum += parseInt[number[n]]
      n++;
    }
    console.log(string[i]);
    x = string[i].toString()
    console.log("type", typeof x);
    const toReturn = x.split('').reduce(function(r, n) { return r + parseInt(n) }, 0);
    console.log("retora",typeof toReturn, toReturn);
  }
  console.log(weightMap);
  return "11 11 2000 10003 22 123 1234000 44444444 9999"
}