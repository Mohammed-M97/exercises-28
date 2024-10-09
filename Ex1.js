// Hackerrank
// Diagonal Difference
function diagonalDifference(arr) {
  let leftDiagonalSum = 0;
  let rightDiagonalSum = 0;

  for (let i = 0; i < arr.length; i++) {
    leftDiagonalSum += arr[i][i];
    rightDiagonalSum += arr[i][arr.length - i - 1];
  }

  return Math.abs(leftDiagonalSum - rightDiagonalSum);
}
let x = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(x));
