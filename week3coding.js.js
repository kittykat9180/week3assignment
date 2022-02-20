// Question 1 (a - c)

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);
function difference(){
    return Math.abs(ages[ages.length - ages.length] - ages[ages.length - 1]);
}
console.log('The difference of the first number and last number in the array is '+ difference());

ages.push(15);
console.log(ages);
console.log('The difference of the first number and last number in the array is '+ difference());

let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
} console.log('The sum of ages is ' + sum);
console.log('The average age is ' + Math.round(sum / ages.length));

// Question 2 (a & b)

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
function wordLength(){
    return names.map(w => w.length);
} console.log('The length of names are ' + wordLength());

sum = 0;
let namesLength = wordLength();
for (let i = 0; i < namesLength.length; i++) {
    sum += namesLength[i];
} console.log('The sum of names is ' + sum);
console.log('The average name length is ' + Math.round(sum / namesLength.length));

let namesString = '';
for (let i = 0; i < names.length; i++){
    namesString += names[i];
    namesString += ' ';
}console.log(namesString);

// Question 5

let nameLengths = [];
for (let i = 0; i < names.length; i++){
    let currentName = names[i];
    nameLengths.push(currentName.length);
}
console.log('Name lengths are ' + nameLengths);

// Question 6
function averageLegnth(){
for (let i = 0; i < nameLengths.length; i++) {
    return sum += nameLengths[i];
} }
console.log('The average name length is ' + Math.round(sum / nameLengths.length));

// Question 7 (word = bubble, n = 7)

function repeatStringNumTimes(string, times) {
    if (times > 0)
      return string.repeat(times);
    else
      return " ";
  } 
  console.log(repeatStringNumTimes('bubble', 7)); 

// Question 8

function fullName (firstName, lastName) { 
    return firstName + ' ' + lastName;   
 } console.log('My full name is ' + fullName('Kat', 'Wilson'));

//  Question 9
function arraySum(arrayOfNumbers){
    let total = 0
    for (let i = 0; i <= arrayOfNumbers.length; i++){
        total += arrayOfNumbers[i];
        if (total > 100){
            return true;
        }
    }
    return false;
}
let myArray = [2, 6, 48, 4, 28, 37];
console.log('The array is greater than 100: ' + arraySum(myArray));

//  Question 10

 let arr1 = [26, 7, 49, 3, 30, 0];
sum = 0;
for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
} console.log('The average numbers is ' + Math.round(sum / arr1.length));

// Question 11
let arr2 = [17, 29, 42]; //comparing to arr1 in question 10
function arrayCompar(array1, array2){
    let sum1 = 0;
    for(let i = 0; i < array1.length; i++){
        sum1 += array1[i];
    }
    let sum2 = 0;
    for(let i = 0; i < array2.length; i++){
       sum2 += array2[i];
} if (sum1 > sum2){
    return true;
}
    return false;
} console.log('Arr1 sum is greater than arr2 sum: ' + arrayCompar(arr1, arr2));

// Question 12 

function willBuyDrink(isHotOutside, moneyInPocket){
if (isHotOutside && moneyInPocket > 10.50){
    return true;
}
else{ 
    return false;
}} console.log('I will buy a drink? ' + willBuyDrink(false, 20));

// Question 13   Can I go on vacation?  To go on vacation I must have more in
// savings than the cost of the trip and COVID must be over or the trip must be local.
function vacation(savings, cost, covidOver, local){
    if (savings > cost && (covidOver || local)){
        return true;
    }
    return false
}
console.log(vacation(2000, 1800, false, false));