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

