const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]
const panagram = ['the', 'quick', 'brown', 'fox', 'jumps',]


function myCallBack(element) {
    if(element > 0) {
        return true
    } else {
        return false
    }
}

nums.forEach((element) => console.log(element * 3))
panagram.forEach((word) => console.log(word +'!'))


const numbers = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 0]
const panagram2 = ['BOOM', 'BAM', 'BOP']

numbers.forEach((element) => console.log(element % 7))
