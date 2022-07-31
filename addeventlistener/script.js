//while loop -> when you are not sure how many time you want to loop
let num = 0
let num2 = 10
while(num < 5){
    console.log(num)
    num++
}

//for loop -> whe you know how many times you want to loop
for(let i = 0; i < num; i++){
    console.log(i)
}

//addeventListener
//DOM -> document object model
let play = document.getElementById('play')
console.log(play.innerText)
play.onclick = () => {
    console.log('lol')
}
play.addEventListener('click', () => {
    console.log('lol')
}) //better version to the top on 

document.addEventListener('keydown', () => {
    console.log('ll')
}) //function(e) then a if else or if catch statment


//<audio> tags
