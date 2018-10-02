/**
 * Created by Arunabho Majumder on 2018-10-02 -- 18:02
 *
 * @author {@link "mailto:arunabho95@gmail.com" "Arunabho Majumder"}
 * @since 2018-10-02 -- 18:02
 *
 *
 * = Description =
 *
 * <a href="https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript"></a>
 *
 * 7 kyu - Sum of the first nth term of Series
 *
 * Task:
 * Your task is to write a function which returns the sum of following series upto nth term(parameter).
 * ex) Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 *
 * Rules:
 * # You need to round the answer upto 2 decimal places and return it as String.
 * # If the given value is 0 then it should return 0.00
 * # You will only be given Natural Numbers as arguments.
 *
 * Examples:
 * # SeriesSum(1) => 1 = "1"
 * # SeriesSum(2) => 1 + 1/4 = "1.25"
 * # SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
 *
 */
function SeriesSum(n)
{
  for (var sum=0,index=0;index<n;index++)
  {
    sum = sum +(1/(1+index*3));
  }
 return sum.toFixed(2); 
}