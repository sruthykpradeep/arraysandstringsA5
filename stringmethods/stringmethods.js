//string methods-24

//1.concat 
let str1 = "Hey";
let str2 = "How are you";
let newStr = str1.concat(", ", str2, "?");
console.log(newStr);

//2.endsWith
let sentence = "Today is a good day";
let check = sentence.endsWith("day");
console.log(check);

//3.includes
let check1 = sentence.includes("bad");
console.log(check1);

//4.indexOf
const message = "Anyone can be a car driver";
const index = message.indexOf("c");
console.log('index: ' + index); 

//5.lastIndexOf
var str = "Photography";
var result = str.lastIndexOf('p');
console.log(result);

//6.match
const para = "Delhi is in India.";
let matched = para.match('is');
console.log(matched);

//7.matchAll
let wish= " Good morning , Good night ";
let matches= wish.matchAll("Good");
console.log(Array.from(matches));

//8.padEnd
let string = "PASSWORD";
let paddedString = string.padEnd(12, "123");
console.log(paddedString);

//9.padStart
let string1 = "PASSWORD";
let paddedString1 = string1.padStart(12, "123");
console.log(paddedString1);

//10.repeat
const holiday = "Happy holidays!";
const rslt = holiday.repeat(3);
console.log(rslt);

//11.replace
const message1 = "worms";
let rsult = message1.replace('w','f');
console.log(rsult);

//12.search
let strings1 = "Iam an Indian";
let index1 = strings1.search("an");
console.log(index1);

//13.slice
const msg = "Lets do it together";
let Rsult = msg.slice(0, 10);
console.log(Rsult);

//14.split
const p = "This::is::cool";
let Result = p.split("::");
console.log(Result);

//15.startsWith
const stg1 = "This is cool";
let Rslt = stg1.startsWith("This");
console.log(Rslt);    

//16.substr
let sampleString = " Nobody is you and that is your power";
let substring = sampleString.substr(1,6);
console.log("substring:",substring);

//17.substring
let smplString = "who are you ?";
let sstring = smplString.substring(8,11);
console.log("substring:",sstring);

//18.toLowerCase
 let str3 = "LEARN JAVASCRIPT";
 let lowercase = str3.toLowerCase(); 
 console.log("Lowercase:",lowercase);
      
//19.toUpperCase
let str4 = "these are some impotant string methods";
let uppercase = str4.toUpperCase(); 
console.log("uppercase:", uppercase);

//20.trim
let trimmedString = "      Hey,Good afternoon      ";
console.log("trimmedstring:",trimmedString.trim());

//21.trimEnd(or trimRight)
let trimmedString1 = "      Hey,Good afternoon      ";
console.log("trimmedstring:",trimmedString1.trimEnd());

//22.trimStart(or trimLeft)
let trimmedString2 = "      Hey,Good afternoon     ";
console.log("trimmedstring:",trimmedString2.trimStart());

//23.charAt
let str5 = "Hey, Please Help me ";
let charAtIndex = str5.charAt(8)
console.log("character at index 8:",charAtIndex);

//24.charCodeAt
let charCodeAtIndex = str5.charCodeAt(8);
console.log("code of character at index 8:",charCodeAtIndex);

//END
















