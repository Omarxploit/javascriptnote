/**console.log('hello')

let title = document.getElementById(title) //get the id from the index html
console.log(title)
console.log(title.innerHTML) //pull the html txt in the id
title.innerHTML = 'Hello friend' //change the title to "Hello friend
console.log(title)
let message = 'Hello friend that lime'
title.innerText = message;
title.innerHTML =  `<p>${message}</p>` //the html and the page
title.style.color = 'red'; //change the color 
title.style.backgroundColor = '#FFFFFF'; //change the background color
console.log('hello')

let titleDiv = document.getElementById('title')

console.log('before: ', titleDiv.innerText)

let message = 'Square Color Counter 🚀'

titleDiv.innerText = message;

console.log('after: ', titleDiv.innerText)

titleDiv.innerHTML = `<p>${message}</p>`

titleDiv.style.backgroundColor = 'blue's
**/


const squares = document.querySelectorAll('.colorSquare')

// forEach
const timesClicked = {'red': 0, 'yellow': 0, 'green': 0}
squares.forEach(square => {
  square.onclick = () => {
    timesClicked[square.value] += 1
    square.innerText = timesClicked[square.value]
  }
})
function clearScores() {
  timesClicked.red = 0
  timesClicked.yellow = 0
  timesClicked.green = 0
  squares.forEach(square => {
    square.innerText = ''
  })
}

const clearGameBtn = document.getElementById('clear-game')
clearGameBtn.onclick = () => clearScores()
