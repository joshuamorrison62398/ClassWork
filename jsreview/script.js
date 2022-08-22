// Javascript Review
  
// 1. Variables and Datatypes
  // A. Q + A
    // 1. How do we assign a value to a variable
    /* Answer: by using let or const to declare a varible and using equal sign to assign its value*/
    
    // 2. How do we change the value of a variable
    /* Answer : redeclare varible in a different block */

    // 3. how do we assign an existing variable to a new variable
    /* Answer: declare varible without using let or const and use equal sign to reassign new varible */

    //4. what are declare, assign and define
    /* Answer: let x = 15 , let is declaring the variable, x is defining the varible, and assigned to the varible is 15 */
    
    //5. what is pseudocoding and why should you use it
    /* Answer: simple way to describe a set of instructions, has own syntax. very similar to programming language.

    //6. what percentage of time should be spent thinking about how you are going to solve a problem vs actually typing in code to solve it?
    /* Answer: 90% */


//2. Strings
   //1. and 2.
    let firstVariable = "Hello World!"
   //3.
    firstVariable = 200
    //4.
    let secondVariable = firstVariable;
    //5.
    secondVariable = "I am Batman!"
    
    //6.  200

    //7. 
    let yourName = 'joshua';

    //8.
    console.log(`Hello, my name is ${yourName}.`)


//3. Booleans

   const a = 4;
   const b = 53; 
   const c = 57;
   const d = 16;
   const e = 'Kevin'

   console.log(a !== b);
   console.log(c !== d);
   console.log('Name' === 'Name');

   console.log(true !== false);
   console.log(false || false || false || false || false || true);
   console.log(false === false);
   console.log(e === 'Kevin');
   console.log(a + b === c);
   console.log(a * a === d);
   console.log(48 !== '48');


//4.The Farm

  let animal = 'cow';
  if (animal === 'cow') {
    console.log('moooo');
  } else {
    console.log('Hey you are not a cow')
  }
  console.log()


// 5. Driver's ED.

  let age = 17;
  if(age >= 17) {
    console.log('Here are the keys!')
  } else {
    console.log('Sorry, you are too young')
  }

 

//6. Loops
  //basics

  for(let i = 0; i <= 10; i++) {
        console.log(i)
  }

  for(let i = 10; i <= 400; i ++ ) {
    console.log(i)
  }

  for(let i = 12; i <= 4000; i+=3) {
    console.log(i)
  }

  //Get even

    for(let i = 0; i <= 100; i++){
        if(i % 2 === 0)
        console.log(i + ' is an even number')
    }

// give me five

for(let i = 0; i <= 100; i++) {
    if(i % 5 === 0)
    console.log('I found a ' + i + ' High Five!')    
    if(i % 3 === 0)
    console.log('I found a ' + i + ' Three is a crowd')
    if(i % 15 === 0)
    console.log(' I found a ' + i + ' High Five' + ' Three is a crowd')
}


//Arrays and Control flow
// A. Talk about it 
    //1. The things in an array is called elements
    //2. yes
    //3. grocery list, list of names, etc.

//B. Easy Does It
    let quotes = ['If your not first, your last - Ricky bobby', 'There is no i in team, but there is an i in Win - michael jordan', 'ya style is regular -Shady Mccoy']
    console.log(quotes)

//C. Accessing Elements
    let randomThings = [1, 10, "Hello", true]
    //console.log(randomThings[0]) // access the ifrst element by putting its index which is 0
    let index = randomThings.indexOf("Hello");
    randomThings.splice(index, 1, 'World')
    console.log(randomThings)

//D. Change values
    const ourClass = ['salty', 'zoom', 'sardine', 'slack', 'github']
    const index1 = ourClass.indexOf('github');
    ourClass.splice(index1, 1,'octocat' )
    ourClass.push('cloud city')
    console.log(ourClass)