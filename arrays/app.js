let foods = ['steak', 'tacos', 'burgers']
// map (built-in array method)
let brandNewArray = foods.map(function(item, idx) {
    //change current item
    return item + '!'
})

console.log(brandNewArray)


//reduce(buit-in array method)
 let nums = [6, 2, 3, 9, 8]
 let result = nums.reduce((previuosValue, currentValue)=> {
    return currentValue + previuosValue
 }, 0)

 console.log(result)


