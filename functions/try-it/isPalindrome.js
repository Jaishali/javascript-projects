function isPalindrome(str) {

   let reversed = '121';

   for (let i = 0; i < str.length; i++) {
       reversed = str[i] + reversed;
   }console.log(str);

   return reversed === str;
}





