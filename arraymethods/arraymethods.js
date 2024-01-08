//create an array
let array1 = [1,2,3,4,5,6,7,8];
const array2 = ['a','e','i','o','u'];
const array3 =['salman','hrithik','imran','ranveer','shahrukh'];

//1.concat   
let newArray =array1.concat(9,10);
console.log(newArray);

//2.every    
let result = array1.every(element => element < 5);
console.log(result);

//3.fill   
var colours = ['green','orange','red','blue','black','brown','purple']; 
colours.fill("yellow",1,4);
console.log(colours);

//4.find    
let firstEven= array1.find((num)=>num%2===0);
console.log(firstEven);

//5.findIndex
let index= array3.findIndex((colour)=>colour==="salman");
console.log(index);

//6.flat
let array4 = [1,2,[3,4,5,[6,7,8,[9,10]]]];
let flattenArray = array4.flat(2);
console.log(flattenArray);

//7.forEach
let numbers = [2, 4, 6, 8, 12];
function computeSquare(element) {
  console.log(element * element);
}
numbers.forEach(computeSquare);

//8.includes
let check = array3.includes("ranveer");
console.log(check); 

//9.indexOf
const index1 = array2.indexOf("u");
console.log(index1);

//10.join
let message = ["you", "are", "beautiful."];
let joinedMessage = message.join(" ");
console.log(joinedMessage);

//11.lastIndexOf
const lastIndex = array2.lastIndexOf('o');
console.log(lastIndex); 

//12.pop
let instruments = ['guitar','sitar','violin','ukulele','tabala']
let removedinstruments= instruments.pop();
console.log(instruments)        
console.log(removedinstruments);   

//13.push
let states = ["kerala", "tamilnadu", "delhi"];
states.push("punjab");
console.log(states);

//14.Reverse
let num = [1, 2, 3, 4, 5];
let reversedArray = num.reverse();
console.log(reversedArray);

//15.unshift
let cars = ["alto", "maruti", "audi"];
cars.unshift("swift");
console.log(cars);

//16.shift
var animals = ["dog", "cat", "lion", "tiger", "cheetah"];
var shifted = animals.shift();
console.log(animals); 
console.log(shifted); 

//17.slice
let squares = [4,9,16,25,36,42,64]
let sliced = squares.slice(1, 6);
console.log(sliced);

//18.some
function checkMinor(age) {
    return age < 18;}
const ageArray = [34, 23, 20, 26, 12];
let checking = ageArray.some(checkMinor);
console.log(checking);

//19.sort
let leaders = ["Gandhi", "Nehru", "Patel", "Bose"];
let sortedArray = leaders.sort();
console.log(sortedArray);

// 20.splice
let primeNumbers = [2, 3, 5, 7, 9, 11];
let removedElement = primeNumbers.splice(0,1,15);
console.log(primeNumbers);
console.log(removedElement);

//21.toString
let items = ["comb", 100, "mirror", 300];
let itemsString = items.toString();
console.log(itemsString);

//22.Filter
const age = [5,8,10,12,13,15,20]
let majorage = age.filter((age) => (age> 18));
console.log(majorage); 

//23.Reduce
let number = [10,20,30,40,50]
let summation = number.reduce(
    (accumulator, currentValue) => accumulator + currentValue );
  console.log(summation); 

//24.map
let somenumbers = [3, 6, 9, 12, 15];
function square(number) {
  return number * number;}
let squareNumbers = somenumbers.map(square);
console.log(squareNumbers);



















