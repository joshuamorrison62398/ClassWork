
// inside paranthesis we have 
// three statements:

// statement 1:
// declare and initialzie a variable

// statement 2:
// a condition when true runs the 
// code in the for loop

// statement 3:
// incrementing of the variable in
// order to eventually break the loop

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// Step 1: declare and initialize variable
// Step 2: check the condition whether true/false
// Step 3: console log runs and prints i
// Step 4: variable i increments by 1
// Step 5: repeat Step 2
// Step ..: when condition returns false, stop loop

// EXERCISE 1

 for (let i = 10; i > 0; i--) {
     console.log(i);
 }

// // EXERCISE 2

for (let i = 0; i<=20; i++) {
    if (i < 10 && i % 2 != 0) {
         console.log(i);
     }
     if (i > 10 && i % 2 == 0) {
        console.log(i - 10);
     }
 }


// // EXERCISE 3

 for (let i = 6; i <= 60; i+=3) {
    console.log(i);
 }

// // EXERCISE 4

 let star = '';
 for (let i = 1; i < 8; i++) {
     star += '#';
    console.log(star);
 }

// // EXERCISE 5

 for (let i = 0; i <= 10; i++) {
     if (i % 2 == 0) {
         console.log(i);
     }
 }

// // EXERCISE 6

for (let i = 1; i <= 20; i++) {
     if (i == 1 || i == 3) {
        console.log (i +' odd');
    } else if (i == 2) {
         console.log (i + ' even');
     }
     else {
        if (i % 2 == 0) {
            console.log(i+ ' even');
        } else if (i % 3 == 0) {
            console.log(i + ' odd');
         } else {
             console.log(i + ' prime');
         }
     }
 }


// statement 1:
// declare and initialzie a variable

// statement 2:
// a condition when true runs the 
// code in the for loop

// statement 3:
// incrementing of the variable in
// order to eventually break the loop

 let u = 1;

 while (u < 10) {
    console.log(u);
    u++;
 }

// // EXERCISE 1

 let h = 1
 while(h < 35) {
     if (h % 3 == 0) {
         console.log(h);
     }
    h++;
 }

// // EXERCISE 2

 let k = 1;

 while (k < 100) {
     if (k % 5 == 0) {
         console.log(k);
     }
     k++;
 }

// // EXERCISE 3

 let m = 1;

 while (m<20) {
     if (m % 2 == 0) {
         console.log(m*3);
     }
    m++;
 }

// // EXERCISE 4

let n = 1;

 while (n < 20) {
    if (n % 2 != 0 && n % 3 != 0) {
         console.log(n);
    }
     n++;
 }

// // BONUS QUESTION

 let i = 600;
 let quarters = 0;
 while (i > 0) {
    i -= 25;
     quarters++;

 console.log(quarters + ' quarters');

 }