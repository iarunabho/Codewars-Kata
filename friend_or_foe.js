/**
 * Created by Arunabho Majumder on 2018-10-02 -- 18:45
 *
 * @author {@link "mailto:arunabho95@gmail.com" "Arunabho Majumder"}
 * @since 2018-10-02 -- 18:45
 *
 *
 * = Description =
 *
 * <a href="https://www.codewars.com/kata/friend-or-foe/train/javascript"></a>
 *
 * 7 kyu - Friend or Foe?
 *
 * Task:
 * Your task is to Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not....
 * ex) Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 *
 * Rules:
 * # keep the original order of the names in the output.
 * 
 *
 * Examples:
 * # friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
 * # friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
 * # friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]), ["Jimm", "Cari", "aret"]);
 * # friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
 */
function friend(friends){
    var words;
    var array = [];
    for (let i=0;i<friends.length;i++)
    {  
      words = friends[i].split('');
        if(words.length === 4){
           array.push(friends[i]);
        }
        
    };
    return array;
  }
/* An easier approache

function friend(friends){
  return friends.filter(n => n.length === 4)
}

*/
