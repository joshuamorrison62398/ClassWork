//           0        1         2
let arr = ['kiwi', 'banana', 'apple']
//OOP- object oriented programming


// object literal
let cat = {
    name : 'minks',
    fur : 'grey',
    legs : 4
}

// access a property with a dot notation
//console.log(cat.name) // (.'category listed' after initial function to log that item)
//console.log(cat.fur)
//console.log(cat.legs)

// we can also access properties woth brackets
//console.log(cat['name'])
//console.log(cat['fur'])
//console.log(cat['legs'])

//let propName = 'fur'
//console.log(cat[propName])

//console.log(cat)
//cat.breed = 'calico'
//console.log(cat)

//cat.temperament = ['mild']
//console.log(cat)

//cat.temperament.push('angry')
//console.log(cat)

//console.log('Does my cat have legs???')
//if(cat.science === true) {   // undefined
    //console.log('wi')
//} else {
    //console.log('no')
//}


/*
arr.forEach()
arr.map()
arr.filter()
arr.reduce()

for ... in loop is for objects
*/
//for (let key in cat) {
    //key represents ... fur, legs, name
    //console.log('key', key)
    //key is a string value
    //console.log('value', cat[key]) // gives us the value 
    //console.log()
//}

//

let basketball = {
    ball : 'round',
    players : 5,
    field : 'hardwood floors'
}
 console.log(basketball.ball);
 console.log(basketball.players)
 console.log(basketball.field)

 basketball.championship = 'The Finals'
 console.log(basketball)

 basketball.playoffs =['series']
 console.log(basketball)

 basketball.playoffs.push('best of 7')
 console.log(basketball)

let football = {
    ball : 'pigskin',
    players : 11,
    field : 'grass'
}
console.log(football.ball)
console.log(football.players)
console.log(football.field)

football.championship = 'Super Bowl'
console.log(football)

football.games = [16]
console.log(football)

football.games.push(17)
console.log(football)


//exercise: objects
 
const countChar = function(str){
    let myObject = {};
    for (let s of str){
        if (myObject[s]){
            myObject[s]++
        }else {
            myObject[s] = 1
        }
    }
    return myObject
}

console.log(countChar('whack'))

//exercise 2 classwork




// more objects
const cat2 = {
    name : 'parlay',
    legs : 4,
    friends : [
        {
            name : 'minks',
            legs : 4
        },
        {
            name : 'oscar',
            legs : 3
        },
        {
            name : 'leo',
            legs : 5
        }
    ]
}

// how do access nested values?
console.log(cat2.friends[0].name);
// 1. hwo do we access the string "oscar"
console.log(cat2.friends[1].name)
// 2. how do access the string 'leo'
console.log(cat2.friends[2].name)


cat.friends
cat['friends']
