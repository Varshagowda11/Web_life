//!at()
// let str="Javascript"
// console.log(str.at(0)); //J
// console.log(str.at(-1)); //t

//!charAt()
// let str="Javascript"
// console.log(str.charAt(0)); //J
// console.log(str.charAt(-1)); //

//!charCodeAt
// let str="Javascript"
// console.log(str.charCodeAt(1));//97
// console.log(str.charCodeAt(-1)); //Nan

// //!concat
// let str1="Java"
// let str2="Script"
//  let newstr= str1.concat(str2) //str1.concat(" ",str2)
// console.log(newstr); //JavaScript 

// !includes
// let str="Javascript is a programming language is"
// console.log(str.includes('is',20)); //true
// console.log(str.includes('is')); 

//!indexof()
// let str="Javascript is a programming language is"
// console.log(str.indexOf('a')); //1
// console.log(str.indexOf('a',25));//29
// console.log(str.indexOf('j')); //-1

//!lastIndexOf()
// let str="somu rajuo"
// console.log(str.lastIndexOf('o')); //9

//!split()
// let str="Javascript is a programming language is"
// console.log(str.split(' ')); //['Javascript', 'is', 'a', 'programming', 'language', 'is']
// console.log(str.split('a')); //['J', 'v', 'script is ', ' progr', 'mming l', 'ngu', 'ge is']
// console.log(str.split("")); //[
//   'J', 'a', 'v', 'a', 's', 'c', 'r',
//   'i', 'p', 't', ' ', 'i', 's', ' ',
//   'a', ' ', 'p', 'r', 'o', 'g', 'r',
//   'a', 'm', 'm', 'i', 'n', 'g', ' ',
//   'l', 'a', 'n', 'g', 'u', 'a', 'g',
//   'e', ' ', 'i', 's'
// ]

// console.log(str.split("",5)); //['J', 'a', 'v', 'a', 's']

//!toLowerCase()
// let str="JAVASCRIPT"
// console.log(str.toLowerCase()); //javascript

//!toUpperCase()
// let str="javascript"
// console.log(str.toUpperCase()); //JAVASCRIPT

//!trim()
// let str="   Javascript   "
// console.log(str.trim()); //Javascript
// console.log(str.length); //15
// console.log(str.trim().length);//10

// !trimStart()
// let str="   Javascript   "
// console.log(str.trimStart()); //Javascript   
// console.log(str.trimStart().length); //13

//!trimEnd()
// let str="   Javascript   "
// console.log(str.trimEnd()); //   Javascript
// console.log(str.trimEnd().length); //13

//!startsWith()
// let link="https://www.google.com" //"http://www.google.com"
// console.log(link.startsWith('https')); //true
// console.log(link.startsWith('www')); //false
// console.log(link.startsWith('https')); //false for 2nd statement

//!endsWith()
// let link="https://www.google.com" //"http://www.google.com"
// console.log(link.endsWith('.com')); //true 
// console.log(link.endsWith('.org')); //false

//!repeat()
// let str="Javascript "
// console.log(str.repeat(3)); //Javascript Javascript Javascript

//!padStart()
// let str="ramu"
// console.log(str.padStart(2,'o'));//ramu
// console.log(str.padStart(10,'o'));//ooooooramu

//!padEnd()
// let str="ramu"
// console.log(str.padEnd(2,'o'));//ramu
// console.log(str.padEnd(10,'o'));//ramuoooooo

//!replace()
// let str="ramu ramu"
// console.log(str.replace("ra","so")); //sommu ramu

//!replaceAll()
// let str="ramu ramu"
// console.log(str.replaceAll("ra","so")); //sommu sommu

//!tolocaleLowerCase()
// let str="JAVASCRIPT"
// console.log(str.toLocaleLowerCase()); //javascript

// //!toLocaleUpperCase()
// let str="javascript"
// console.log(str.toLocaleUpperCase()); //JAVASCRIPT

//!toString()
// let str=new String("Javascript")
// console.log(str);
// console.log(typeof str); //object
// console.log(typeof str.toString()); //string

//!substring()
// let str="Javascript is wonderful language"
// console.log(str.substring(-15,-7)); 
// console.log(str.substring(4));
// console.log(str.substring(-19));
// console.log(str.substring(11,22));
// console.log(str.substring(22,11));
// console.log(str.substring(-7,-15));
// console.log(str.substring(35));

//!slice()
// let str="Javascript is wonderful language"
// console.log(str.slice(-15,-7)); 
// console.log(str.slice(4));
// console.log(str.slice(-19));
// console.log(str.slice(11,22));
// console.log(str.slice(22,11));
// console.log(str.slice(-7,-15));
// console.log(str.slice(35));





