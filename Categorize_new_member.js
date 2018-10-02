/**
 * Created by Arunabho Majumder on 2018-10-02 -- 23:01
 *
 * @author {@link "mailto:arunabho95@gmail.com" "Arunabho Majumder"}
 * @since 2018-10-02 -- 23:01
 *
 *
 * = Description = Categorize New Member
 *
 * <a href="https://www.codewars.com/kata/categorize-new-member/train/javascript"></a>
 *
 * 7 kyu - Friend or Foe?
 *
 * Task:
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
 * To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
 * Input:
 * Input will consist of a list of lists containing two items each. 
 * Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
 *
 *
 * Rules:
 * # The input will be of (int list list) which is a List.
 * 
 *
 * Examples:
 * # OpenOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
 * # openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]]),['Open', 'Open', 'Open', 'Open'])
 * # openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
 */

function openOrSenior(data){
    return data.map(([age, handicap]) => (age>=55 && handicap >7)? 'Senior':'Open');
}