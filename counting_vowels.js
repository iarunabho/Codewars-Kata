//https://www.codewars.com/kata/vowel-count/train/javascript
function getCount(str) {
  
    var words = str.split('');
    var m = str.match(/[aeiou]/gi);
    
        
    return m === null? 0:m.length;
  }
/* one line code
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}
*/