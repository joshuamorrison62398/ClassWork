




// function declaration / defintion
function sayHello(){
    return 'Hello!'
}



// function expression
const sayHi = function(){
     return 'Hi!'
}

// arrow function
const sayHey = () => 'Hey!'


console.log(sayHello())
console.log(sayHi())
console.log(sayHey())






function add(num1, num2) {     // () list of parameters
    // num1    2
    // num2    3
    return num1 + num2 
}

console.log(add(2, 3))    // list of arguements
console.log(add (5, 5))
console.log(add(10, 1))
console.log(add (3, 8))

console.log(add('Bob', 'The Builder'))







function computeArea(width, length){
    return  "the area of a rectangle of width" + width + "and the length of is"  + length + " which is" + width * length + 'square units'
}
console.log(computeArea(5, 6))


const planetHasWater = (planet) =>
{
    if (planet == 'earth' || planet == 'mars'){
        return 'true';
    } else { 
        return 'false'; 
    } 
}
console.log(planetHasWater("earth"))