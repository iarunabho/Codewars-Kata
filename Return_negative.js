//https://www.codewars.com/kata/return-negative/train/javascript
function makeNegative(num) {
    return Math.sign(num)<0? num:-Math.abs(num);
  }

/* 2nd way of doing #Simple maths
function makeNegative(num) {
  return num <= 0 ? num : num*-1;
}
*/