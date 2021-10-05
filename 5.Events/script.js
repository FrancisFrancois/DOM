const _initTime = Date.now()

function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e){
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

let newDiv = document.createElement('div')
newDiv.classList.add("displayedsquare")
newDiv.classList.add(e.target.classList[1])
let parendDiv =document.querySelector('.displayedsquare-wrapper')
newDiv.addEventListener('click', clickOnSquareGen)
parentDiv.appenChild(newDiv)

