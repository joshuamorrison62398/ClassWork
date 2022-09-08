let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
    document.getElementById('h1').innerHTML = 'welcome';

    // Part 2
   document.body.style.backgroundColor = "yellow"
  
    // Part 3
  let FavThings = document.getElementById("favorite-things")
  
  FavThings.removeChild(FavThings.lastElementChild);
    // Part 4
    let specialTitle = document.querySelectorAll(".special-title")
    for (let item of specialTitle){
      console.log(specialTitle)
      item.style.fontSize = "2rem"
    }
  
    // Part 5
  let lis = document.querySelectorAll("#past-races li")
  for (let item of lis){
    if(item.textContent === "chicago"){
      item.remove()
    }
  }
  
    // Part 6
  let newLi = document.createElement("li")
  newLi.textContent = "new jersey"

  ul.appendChild(newLi)
  newLi.textContent = "new york"
  ul.appendChild(newLi)
  
    // Part 7
  let ndiv = document.createElement("div")
  console.log(ul.classList)
  ndiv.classList.add("blog-post")
  let newH1 = document.createElement("h1")
  newH1.innerHTML = "new jersey"
  let newP = document.createElement("p")
  newP.innerText = " hi i went to new jersey"
  
  let pDiv= document.querySelector("dom-adventures")
  pDiv.appendChild(ndiv)
  
    // Part 8
  

    // Part 9
  
  
  
  
  });