class hamster {
    constructor(name) {
        this.owner = "";
        this.name = name;
        this.price = 15;
    }
    wheelRun(){
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}


const newHamster = new hamster('eon')

console.log(newHamster)

class person {

}


const timmy = new person("timmy");

timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageup()
timmy.ageUp()


timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()

timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()

for(let i = 5; i <=  15; i++) {
    timmy.ageUp()
}