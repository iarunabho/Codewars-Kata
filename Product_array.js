/**
 * Returns product of all numbers in a numeric array.
 * Returns null if param is null or array is empty.
 * @param {Array} values - The array containing the items.
 https://www.codewars.com/kata/product-of-array-items/train/javascript
 */

function product(values) {
    //return values[~~(Math.random() * values.length)];
    if (values == null || values.length <1)
      return null;
    else 
      var sum=1;
      for(var i=0;i<values.length;i++){
        sum =sum*values[i];
      }
      return sum;
  }
/*2nd Way
function product(values) {
  return (values == null || values.length == 0) ? null : values.reduce((a,b) => a*b);
}
*/


  console.log(product([5, 4, 1, 3, 9]));