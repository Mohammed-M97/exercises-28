// Hackerrank
// Plus Minus
function plusMinus(arr) {
  /* let pos = 0;
  let neg = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pos++;
    } else if (arr[i] < 0) {
      neg++;
    } else if (arr[i] == 0) {
      zero++;
    }
  }
  let result = [
    (pos / arr.length).toFixed(6),
    (neg / arr.length).toFixed(6),
    (zero / arr.length).toFixed(6),
  ];
  return result; */
  let positive = arr.filter(number => number > 0).length / arr.length;
    let negative = arr.filter(number => number < 0).length / arr.length;;
    let zeronums = arr.filter(number => number == 0).length / arr.length;;
    return console.log(positive.toFixed(6) + '\n' + negative.toFixed(6) + '\n' + zeronums.toFixed(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
