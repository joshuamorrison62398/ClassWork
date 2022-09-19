//creates an enemy class
class enemyValues {
    constructor(hp = (Math.floor(Math.random() * 4) + 2),fp = (Math.floor(Math.random() * 2) + 1), ac =  (Math.floor(Math.random()) * .4) + .2) {
        this.hp = hp;
        this.fp = fp;
        this.ac = ac;
        this.status = true;
    }
}

//initiate list of enemies
let enemyList = [];

let enemyStats = document.querySelector(".enemyStats")
let enemyAttributes = enemyStats.innerText.split("\n")
let enemyAttributes2 = enemyAttributes[0].split(" ")
let enemyHull = enemyAttributes2[2];
enemyAttributes2 = enemyAttributes[1].split(" ")
let enemyFP = enemyAttributes2[2];
enemyAttributes2 = enemyAttributes[2].split(" ")
let enemyAC = enemyAttributes2[2];
// console.log(enemyAttributes2)

//set original enemy to object and pushes it to total enemies
let newEnemy = new enemyValues(enemyHull,enemyFP,enemyAC);
enemyList.push(newEnemy)

console.log(enemyList);


//makes multiple enemies
function createEnemies() {
    let numEnemies = Math.floor(Math.random()*3) + 4;

    for(let i = 1;i<=numEnemies;i++){
        newEnemy = new enemyValues()
        enemyList.push(newEnemy)
    }
}
//calls the function
createEnemies()

console.log(enemyList[0].hp);

//create player
let playerStats = document.querySelector(".playerStats")
let playerAttributes = playerStats.innerText.split("\n")
let playerAttributes2 = playerAttributes[0].split(" ")
let playerHull = playerAttributes2[2];
playerAttributes2 = playerAttributes[1].split(" ")
let playerFP = playerAttributes2[2];
playerAttributes2 = playerAttributes[2].split(" ")
let playerAC = playerAttributes2[2];
//missles
let missles = 3;

playerStats.innerText = `Hull : ${playerHull}\nFirepower : ${playerFP}\nAccuracy : ${playerAC}\nMissles :${missles}`; 
// console.log(playerAttributes2[2])

alert("Click on the ship to fight off the invader!")
//get id of img to set add event listener
let ship = document.querySelector(".playerImage");
let shipStatus = true;
console.log(enemyList.length);

let attackTarget;

//No megaship in the beginning
let megaShip = false;

ship.addEventListener("click", function(){
    //ship status determines if the game is on
    if(shipStatus==true){
        //random shield function
        if(Math.random()>.7){
            alert("SHIELDS ACTIVATE\nHull's looking stronger");
            playerHull+=3;
        }
        //set prompt for targetting attack command
        let targetNum = (prompt(`There are ${enemyList.length}, which do you want to target?`))-1;
        while(megaShip==true && enemyList.length>1 && targetNum==0){
            alert("The Ship's weapons are in the way, try again")
            targetNum = (prompt(`There are ${enemyList.length}, which do you want to target?`))-1;
        }
        console.log(targetNum)
        attackTarget = enemyList[targetNum]
        console.log(attackTarget)
        attackCommand(attackTarget)
        //checks if there are still enemues
        if(playerHull<=0) {
            alert("COMMANDER, CAN YOU HEAR ME?! COMAAAAANDEEER!!")
            shipStatus=false;
        } else if(attackTarget.hp<=0){
            enemyList.splice(targetNum,1)
            //if player defeats an enemy, let the player know
            if(enemyList.length>0){
                alert("Now's not the time to celebrate, more incoming")
                console.log(enemyList)
            } else {
                alert("Congratulations soldier, you're going home!")
                //if the player has enough health and enough missles, it starts the boss fight
                if(megaShip==false && playerHull>10 && missles>2){
                    alert("Wait, What is that!");
                    alert("Oh no, it's the Mega-Ship!")
                    alert("You have to get through the weapons before you can attack the main hull (Enemy 1)")
                    //creates the boss
                    newEnemy = new enemyValues(10,8,0.1);
                    enemyList.push(newEnemy)
                    //creates the weapons
                    for(let i =0; i<4;i++){
                        newEnemy = new enemyValues (10, 2, 0.5)
                        enemyList.push(newEnemy)
                    }
                    enemyList.push()
                    console.log(enemyList[0])
                    attackTarget = enemyList[0];
                    megaShip = true;
                } else {
                    shipStatus=false;
                }
                
            }
        //if the player loses
        }
    //ask if the player wants to play again
    } else {
        let playAgain = confirm("Ready for another go trooper?");
        if(playAgain == true){
            playerHull = 15;
            createEnemies();
            shipStatus = true;
            alert("Click on the ship to fight off the invader!")
            attackTarget = enemyList[0]
        } else {
            alert('GAME OVER')
        }
    }
    //resets the dom
    playerStats.innerText = `Hull : ${playerHull}\nFirepower : ${playerFP}\nAccuracy : ${playerAC}\nMissles :${missles}`; 
    enemyStats.innerText = `Hull : ${attackTarget.hp}\nFirepower : ${attackTarget.fp}\nAccuracy : ${attackTarget.ac}`;
})

//Math damage
function attackCommand(target){
    //missles
    let useMissle;
    if(missles>0){
        useMissle = confirm(`Use Missle?`)
        if(useMissle){
         missles--;
        }
    }
    //player attacks
    if((Math.random())<playerAC){
        if(useMissle){
            target.hp-= ((playerFP*1)+3)
            console.log(playerFP)
        }else{
            target.hp-= playerFP;
        }
        alert("What a Hit!")
    } else {
        alert("You'll get them next time")
    }
    //enemy attacks
    for(let i in enemyList){
        if((Math.random())<enemyList[i].ac && enemyList[i].hp>0){
            playerHull-= enemyList[i].fp;
            alert("Looks like the enemy got you")
        } else {
            alert(`That was close! Enemy ${(i*1)+1} almost got you.`)
        }  
    }
     
}