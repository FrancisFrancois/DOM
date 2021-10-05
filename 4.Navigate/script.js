const olList = document.querySelector('ol')
const lastChild = olList.lastElementChild
olList.prepend(lastChild)

const h2List = document.querySelectorAll('h2')
const h2section3 = h2List[2].textContent
h2List[2].textContent = h2List[1].textContent
h2List[1].textContent = h2section3

const lastSection = document.querySelectorAll('section')[2]
lastSection.setAttribute("style", "display: none")
console.log(lastSection)