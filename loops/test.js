/*

 output 1:

 1
 12
 123
 1234
 12345

 */

 for (let i = 1; i <= 5; i++){
    let str = ''
    for (let j = 1; j <= i; j++){
       str += j  
    }
    console.log(str)
 }

 /*

   1: initialize the variable i to 1
   2: checks if i (1) is less than or equal to 3
   3: intialize the variable str as a blank string
   4: initialize the variable j to 1
   5: checks if j is less than or equal to i (1)
   6: concatenation 1 as a string to the variable str("1")
   7: increment j by 1 (2)
   8: checks if j (2) is less than or equal to i (1)
   9: print str variable ("1")
   10: increment i by 1(2)
   11: checks if i (2) is less than or equal to 3(true)
   12: initialize the variable str as a blank string
   13: initialize j to 1
   14: checks if j(1) is less than or equal to i (2)
   15: concantenates 1 as a string to the variable str ("1")
   16: increments j by 1 (2)
   17: checks if j (2) is less than or equal to i (2) (true)
   18: concantenates 2 as a string to the variable str ("12")
   19: increments j by 1 (3)
   20: checks if j (3) is less than or equal to i (2) (false)
   21: print str variable ("12")
   22: increment i by 1 (3)
   23: checks of i (3) is less than or equal to 3 (true)
   24: initialize str variable to an empty string
   25: initialize j to 1
   26: check if j (1) is less than or equal i(3) (true)
   27: concatenate 1 as a string to the variable str ("1")
   28: increment j by 1 (2)
   29 check if j(2) is less than or equal to i (3)
   30: concantenates 2 as a string to the variable str ("12")
   31: increment j by 1(3)
   32: checks if j (3) is less than or equal to i (3) (true)
   33: concantenates 3 as a string to the variable str ("123")
   34: increment j by 1(4)
   35: checks if j(4) is less than or equal to (3) (false)
   36: prints str variable ("123")
   37: increment i by 1 (4)
   38: checks if i (4) is less than or equal to 3 (false)
   39: Lunch time!
   */




let foodItem = ['kimchi', 'tacos', 'arepa', 'spam']

// for loops equation
// for (let i = 0, i < 0, i++)

//while loops equation
// while (i < food.length)

//for of
// for (let item of foods)

//forEach (build-in array method)
foods.forEach(function(foodItem) {
   console.log(foodItem)
})