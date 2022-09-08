const btn = document.querySelector("button")
btn.addEventListener("click", function(event) {
   // console.log(event.target)
   // console.log(this)

    // btn, event.target, and this = all represent the button element

const li = document.createElement("li")
console.log(li)

// select the input element and store it in a variable (input)
const input = document.querySelector("input")
console.dir(input)

console.log(input.value)

li.textContent = input.value

document.querySelector('ul').appendChild(li)

input.value = ""

})



const ul = document.querySelector("ul")

ul.addEventListener("click", handleclick)
function handleclick(event) {
    console.log('clicked on ul...')
    console.log(event)
    console.log(event.target)

    console.log('clicked on...', event.target.tagName)
    if (event.target.tagName ===" li") {
        event.target.style.color = "blue"
    }
    if (event.target.tagName === "ul") {
        event.target.style.backgroundColor = "black"
    }
}

