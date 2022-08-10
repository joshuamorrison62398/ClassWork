// bad! (not really) (hoisting)
//var age;

//good
let age;

//constant
//const age = 8;

age = 10;


// data types

//number
const age2 = 10;

//strings
const name = "josh"
const name2 = 'josh'
const name3 = `josh`

//boolean
const employed = true;

//undefined
const example = undefined;

//null
const example2 = null;

// string operator
let firstname = "bob"
let lastname = "the builder"

//concatenation
let fullname = firstname + lastname
let banana = "con" + "cat" + "ena" + "tion"



console.log(banana)

// camel case
// myFavoriteDessert

//kebab case
// my-favorite-dessert

// logical operators
// and     &&
// or      ||
// not m   !


// shorthands


let fire = 0;

fire -= 1
fire = fire + 1

fire += 1

// only for incrementing o decrementing by 1
fire -- // incrementing by 1
fire ++ // decrementing by 1

fire = fire - 10

console.log(fire)

// loose comparison (uses type coercion)
// == (2 equal signs)

//strict comparison
// ===(3 equal signs)

// assignment operator
// = (1 equal sign)


// !==      !=


let x = 6;
let y = 3;

console.log(x < 10 && y > 1)

console.log(x == 5 ||  y == 5)








let num1 = 3
let num2 = 4
let num3 = num1 + num2
 console.log(num1 + num2)


 let num4 = 1
 let num5 = 2
 let num6 = 3
 let num7 = 4
 let num8 = 5
 let num9 = 6
 let num10 = 7
 let num11 = 8
 let num12 = 9
 let num13 = 10
  average1 = (num4 + num5 + num6 + num7 + num8) /5
  average2 = (num9 + num10 + num11 + num12 + num13) /5
  average3 = (average1 + average2) /2
console.log(average1)
console.log(average2)
console.log(average3)








let num23 = 101
 if( num23 >= 100){
    if ('num23 is positive and greater than 100'){

    }
    if ('num23 <= 100'){
     console.log('woohoo!')
    }
 } else { ('num is negative')
    console.log('boohoo!')
 }



let grade = 67

 if (grade >= 55) {
    if (grade >= 90) {
        console.log('A');
    } else if (grade >= 80) {
        console.log('B');
    } else if (grade >= 70) {
        console.log('C');
    } else {
        console.log('D');
    }
} else {
    console.log('F');
}


let global = 'global'
if(true) {
      let blockScoped = 'block'
      console.log(blockScoped)

      if(true){
        let nestedBlockscope = 'nest'
        console.log(nestedBlockscope)
        console.log(blockScoped)

      }
} else {

}

console.log(global)



let number = 5;
switch (number) {
    case 1: 
      console.log('inside of case 1')
      break;
    case 2: 
       console.log('inside of case 2')
       break;
    case 3:
        console.log('inside of case 3')
        break;
        default:
            console.log('do something else')
            break;
}




// ternary operator (means three parts)

let lighting = 'dark'



/*
let lighting = 'light'
let dayOrNight;
if (lighting === 'dark'){
    dayOrNight = 'night time'
} else if (lighting === 'cloudy') {
    dayOrNight = 'overcast'
} else {
    dayOrNight = 'day time'
}


*/





let letter = 'Z';
switch(letter) {
case "A":
case "E":
case "I":
case "O":
case "U":
    console.log('vowel');
    break;
    default:
    console.log('consonant');


}
