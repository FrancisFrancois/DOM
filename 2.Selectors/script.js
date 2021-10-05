const important = document.querySelectorAll('.important');
for (item of important) {
    item.title = "This is an important item";
}

const images = document.querySelectorAll('img');
for (item of images) {
    if(item.classList.contains('important')) {
        item.style.display = "none";
    }
}


const paragraph = document.querySelectorAll('p')
for (item of paragraph) {
  if (item.hasAttribute('class')) {
    console.log(item.classList)
  }
  else {
    item.style.color = randomColor()
    console.log(item)
  }
}


function randomColor() {

    let r = function () { return Math.floor(Math.random()*256) };
    let g = function () { return Math.floor(Math.random()*256) };
    let b = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + g() + "," + b() + ")";

}
