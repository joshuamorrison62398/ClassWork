let learner = 'josh'
let learner2 = 'eli'
let learner3 = 'sterling'


// ARRAYS = data structure for lists
        //      0^index   1spot     2spot
let learners = ['josh', 'eli', 'sterling']
let learners2 = ['leyah', 'jael', 'lani']
learners // [josh, eli,ster]
learners[0] = 'jhim' // can reset value for here to replace ex.'josh' with an equal sign =
learners[3] = 'ezra'// can add to original list with editing og list (*console.log separately)
console.log(learners[0])
console.log(learners[1])
console.log(learners[2])
console.log(learners. length) // length is how many index spots ex(3.josh,eli,stert)
console.log(learners)
learners.push('dak') // another method to add to og list at end(console.log separately)
console.log(learners)
learners.pop()// removes last index/spot from og list (console.log separately)
console.log(learners)
learners.shift()// removes 1st index/spot (c.ls)
console.log(learners)
learners.unshift('jhim')// adds 1st index/spot back (c.ls)
console.log(learners)
let removedvalue = learners.pop()// can remove index out of 1st edited (ezra)list but still listed (*can replace pop function with any fucntions used)
console.log(removedvalue)
let everybody = [... learners, ... learners2] // spread operator = takes both lists and makes one list in order of both
console.log(everybody)
//rest parameter :if you have numbers use below function to add numbers as list)
function add(... numbers) {
    for (let i = 0; i < numbers. length; i++){
        console.log(numbers[i])
    }
}
add(4, 5, 6, 10, 100, 50)



//Exercise 1
  function maxOfTwoNumbers(a, b){
     if ( a > b){
        return a;
     } else {
        return b;     
    }
  }
  console.log(maxOfTwoNumbers(2, 7))

  //exercise 2
  function maxOfThreeNumbers(a, b, c){
    if ( a > b && c){
        return a;
    } else if ( b > a && c) {
        return b;
    } else if ( c > a && b){
        return c;
    }
  }
  console.log(maxOfThreeNumbers(9, 7, 2))
//exercise 3
  function isCharAVowel(char){
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        return true;
    } else false;{

    }
  }
 console.log(isCharAVowel('a'))

 //exercise 4
  function sumArray(... numbers){
    let sum = 0;
    for (let index = 0; index < numbers.length; index++){
        sum += numbers[index];
    }
    return sum;
  }
  console.log(sumArray(6,23,98))

  //exercise 5
  function multiplyArray(... numbers){
    let product =1;
    for (let index = 0; index < numbers.length; index++){
        product *= numbers[index]
    }
    return product;
  }
  console.log(multiplyArray(12, 13))

 // exercise 6
  function numArgs(...numbers) {
    return numbers.length
  }
  
   console.log(numArgs(623, 'gray', 1124, 301))

  // exercise 7
  function reverseString(){
  const str =  'pacer' ;
  }
  console.log(['p','a','c','e','r'].reverse ());


  //exercise 8

  var arr = [
  'apple',
  'apple computer',
  'apple juice'
];

var lgth = 0;
var longest;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    var lgth = arr[i].length;
    longest = arr[i];
  }
}

console.log(longest); 

//exercise 9
  function stringsLongerThan(strs, num){
    let output = []
    for (let i = 0; i < strs.length; i ++){
        if (strs[i]. length > num){
          output.push(strs[i])
        }
    }
    return output
}

  console.log(stringsLongerThan(['say',
  'hello', 'in', 'the', 'morning'],5));

  //challenge
  function addList (...args){
    if (!args){
        return 0;
    }
    let sum = 0
    for(let i = 0; i < args.length; i++){
        sum += args[i]
    }
    return sum
  }
 console.log(addList(1, 2, 3))

// more on arrays

let foods = ['kimchi', 'tacos', 'arepa', 'spam']

 // for loops
 // for (let i = 0; i < food.length; i++)
 
 // while loops
 // while (i < food.length)
 
 // for of 
 // for (let item of foods)
 
 // forEach (build-in array method)
 // foods.forEach(() => { })
 
 // anonymous function
 // () => 
 // function() { }
 
 // callback functions
 
 // filter (built-in array method)
 let newFoodsArr = foods.filter((item, idx) => {
     // if you return true
     // keep the item
     // if you return false
     // discard it
     if (item[0] === 'k' || item[0] === 's') {
         return true
     } else {
         return false
     }
 })
 
 // console.log(foods)
 // console.log(newFoodsArr)
 
 // map (built-in array method)
 let brandNewArray = foods.map(function(item, idx) {
     // change the current item 
     return item + '!'
 })

 // console.log(brandNewArray)
 
 let nums = [4, 10, 25, 30, 100]
 
 // reduce (built-in array method)
 let result = nums.reduce((previousValue, currentValue) => {
     return currentValue + previousValue
 }, 0)
 
 console.log(result)


 // FizzBuzz exercise
 let max = ".........." .length;
 for (let i = ".".length; i <= (max * max); i++){
  if (i % 15 == 0) console.log("FizzBuzz");
  else if (i % 3 == 0) console.log("Fizz");
  else if (i % 5 == 0) console.log("Buzz");
  else console.log(i)
 }


 
let countDown = 10;

for (var i = 10; i >= 0; i--) {
  console.log(i);

 if (i === 0) {
     console.log("Blast Off!");
 }
}