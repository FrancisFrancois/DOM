const _initTime = Date.now()

let squareContainer = document.querySelector(".displayedsquare-wrapper");
let ul = document.querySelector("ul");
let body = document.querySelector("body");


function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  console.log(e.target.classList[1])
  console.log(getElapsedTime())


  let newDiv = document.createElement('div')
  newDiv.classList.add('displayedsquare')
  newDiv.classList.add(e.target.classList[1])
  squareContainer.append(newDiv)


  let newLi = document.createElement('li');
  newLi.textContent = `[${getElapsedTime()}] Created a ${e.target.classList[1]} square`;
  ul.append(newLi);
}


const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

function rdmcolor(){
    let r = function () {return Math.floor(Math.random()*256)}
    return `rgb(${r()}, ${r()}, ${r()})`
  }


  function keyPress(e) {
    switch (e.key) {
      case " ": 
        let newColor = rdmcolor()
        body.style.backgroundColor = newColor
        let newLi = document.createElement('li')
        newLi.textContent = `[${getElapsedTime()}] Change the bg color to ${newColor}`
        ul.append(newLi)
        break;
      
      case "l":
        let allLi = document.querySelectorAll('li')
        for (item of allLi) item.remove()
        break;
  
      case "s":
        let newSquare = document.querySelectorAll('.displayedsquare')
        for (item of newSquare) item.remove()
    }
  }
  

  body.addEventListener('keypress', keyPress);


