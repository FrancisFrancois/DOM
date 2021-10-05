

newPageTitle = 'Modifying the DOM';
document.title = newPageTitle;



const element = document.body.children

for(item of element) {
console.log(item);
}


document.body.style.background = randomColor()

function randomColor() {

    let r = function () { return Math.floor(Math.random()*256) };
    let g = function () { return Math.floor(Math.random()*256) };
    let b = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + g() + "," + b() + ")";

}
