class Vehicle{
    // vin: 'x123y'
    // make: 'boeing
    //default
    // constructor() {}
    //constructor(vinParam, makeParam, modelParam) {
        //this.vin = vinParam;
        //this.make = makeParam;
       // this.model = modelParam;
       // this.running = false;
       // this.walking = false;
        //console.log('creating a new instance of vehicle')
 //   }

    //goVroom() {
       // console.log('vroom!')
   // }

    //start() {
        //this.running = true;
        //console.log('running')
   // }

    //start() {
        //this.walking = true;
        //console.log('walking')
  //  }

    //toString() {
       // return 'vehicle (' + this.vin + ') is a ' + 
       // this.make + 'model' + this.model;
   // }

}
//const toyota = new Vehicle('x123y', 'boeing', '27')
//const tesla = new Vehicle()

//toyota.goVroom()
//tesla.goVroom()

//toyota.start()
//tesla.start()

//console.log(toyota, tesla)

//let arr = [1, 2, 3]
//arr.forEach()

//let arr2 = new Array(1, 2, 3)

//console.log(arr2)

//arr2.forEach((x) => console.log(x))

 //console.log(toyota.toString())


 // exercise 1
class cat {
    constructor(furParam, genderParam, legsParam){
        this.fur = furParam;
        this.gender = genderParam;
        this.legs = legsParam;
        this.active = false;
    }
    start() {
        this.active = true;
        console.log('active')
    
    }

}


  
  const minks = new cat('gray', 'female', '4')
  const parlay = new cat('black','male', '4' )
  console.log(minks, parlay)
  

  //exercise 2

  class Pirate {

    constructor(hookParam, stoolLegParam, shipParam) {
        this.hook = hookParam;
        this.stoolLeg = stoolLegParam;
        this.ship = shipParam;
        this.rich = false;
    }
    start() {
        this.rich = true;
        console.log('rich')
    
    }
  }
  const captainJackSparrow = new Pirate('no', 'no', 'yes')
  console.log(captainJackSparrow)


//exercise 3
class Car {
    constructor(number){
        this.number = number
    }
}
 








//INHERIT
//class character {
    //constructor(name,age,eyes,hair,lovesCats = true, lovesDogs = false) {
       // this.legs = 2;
       // this.arms = 2;
        //this.name = name;
        //this.age = age;
        //this.eyes = eyes;
        //this.hair = hair;
        //this.lovesCats = lovesCats;
        //this.lovesDogs = lovesDogs || false || true || false
   // }
    //greet (otherCharacter) {
     //   console.log('hi' + otherCharacter + '!');
   // }
    //classygreeting (otherClassyCharacter) {
      //  console.log('Howdy' + otherClassyCharacter.name + '!')
   // }
    //setHair(hairColor) {
        //this.hair(hairColor)
   // }
    //smite()
//}




//child class and/or sub class
//class hobbit extends character {
    //constructor(name,age,hair,height,weight) {
       // super(name, age, eyes, hair)
        
    //}
    //steal() {
       // console.log('woohoo!')
    //}
   // greet() {
       // console.log('teehee hi' + name)
       // super.smite()
  //  }
//}

//const frodo = new hobbit('Frodo', 30, 'brown')
//console.log(frodo)
//frodo.steal()
//frodo.greet('Sam')



//exercise 4 


class governor {
    static hasOffice = true
    static writesLaws = true

    pressConference() {
        console.log('Addressing people in the state')
    }
}

class person {
    constructor(breath, drink, eat) {
        this.breath = breath
        this.drink =  drink
        this.eat = eat
    }
    isBreathing() {
        console.log("im breathing")
    }
    isDrinking(){
        console.log("im drinking")
    }
    isEating(){
        console.log("im eating")
    }
}

class PostalWorker extends person {
    constructor(name) {
        super()
        this.name = name
    }
    openMailBox() {
        return 'opening mailbox'
    }
    checksName() {
        return 'checking name on mail'
    }
    deliveringMail() {
        return 'delivering the mail'
    }
}

console.log(' ====== 1st postal worker ======')
const kyrie = new PostalWorker('kyrie')

console.log(kyrie.openMailBox())
console.log(kyrie.checksName())
console.log(kyrie.deliveringMail())

class chef extends person {
    constructor(name, food) {
        super()
        this.name = name
        this.food = food
    }
    preparesFood() {
        return (`chef ${this.name} is preparing ${this.food}`)
    }
    cooksFood() {
        return(`chef ${this.name} is cooking ${this.food}`)
    }
    presentFood() {
        return(`chef ${this.name} presents ${this.food}`)
    }
}
console.log('\n')

const joshua = new chef('joshua',' pizza')
console.log(joshua)
console.log(joshua.preparesFood())
console.log(joshua.cooksFood())
console.log(joshua.presentFood())



//bonus exercise

class BankAccount {
    constructor(ownerName, balance, accountNumber) {
        this.ownerName = ownerName
        this.balance = balance
        this.accountNumber = new Date().getMilliseconds()
    }
    deposit(amount) {
        return `You deposited $${amount} and your new balance is $${this.balance - amount}`
    }
}

const joshAccount = new BankAccount('josh', 100)

class checkingAccount extends BankAccount {
    constructor(ownerName, balance, overDraftEnabled) {
        super(ownerName, balance)
        this.overDraftEnabled = overDraftEnabled
        this.balance
    }
    withdraw(amount) {
        if(this.balance < amount) {
            return `Insufficient funds : Sorry but your account is $${this.balance} and you are requesting to withdraw $${amount}`
        }
        return super.withdraw(amount)
    }
}

const joshChecking = new checkingAccount('josh', 250)
console.log(joshChecking.withdraw(350))

class savingsAccount extends BankAccount {
    constructor(ownerName) {
        super(ownerName)
        this.ownerName = ownerName
    }
    withdraw() {
        return `Sorry ${this.ownerName}, but withdraws are not allowed from this account.`
    }
}
 
const joshSavings = new savingsAccount('josh')
console.log(joshSavings.withdraw())


