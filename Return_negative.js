//https://www.codewars.com/kata/return-negative/train/javascript
function makeNegative(num) {
    return Math.sign(num)<0? num:-Math.abs(num);
  }