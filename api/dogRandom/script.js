// .then - Promises
// asynchronous programming

const dogImage = document.getElementById('img')
const dogbutton = document.getElementById('button')

const getNewDog = () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(res => res.json())
  .then(json =>{
    dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
  });
}
dogbutton.onclick = () => getNewDog()