// https://www.codewars.com/kata/pillars/train/javascript

function pillars(num_pill, dist, width) {
    // your code here
    return num_pill>1? (num_pill-1)*dist*100+(num_pill-2)*width:0;
  }

console.log(pillars(1, 10, 10),0);
console.log(pillars(2, 20, 25) , 2000);