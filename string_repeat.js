//https://www.codewars.com/kata/string-repeat/train/javascript
function repeatStr (n, s) {
    return n>0?(s.repeat(n)):"";
  }
console.log(repeatStr(3, "*"));

/* 2nd Way using While loop

function repeatStr (n,s){
    var repeatedString = "";
    while(n>0){
        repeatedString +=s;
        n--;
    }
    return repeatedString;
}

repeatStr(3,"abc");
*/

/* 3rd way Using Recursion
function repeatStr(n,s){
    if (n<0)
        return "";
    else if(n ===   1)
        return s;
    else
        return s+repeatStr(n-1,s);

}
repeatStr(3,a);
*/
