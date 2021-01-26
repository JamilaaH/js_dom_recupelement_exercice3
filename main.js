//1
let derniereDiv = document.body.getElementsByTagName('div')[2]
let firstElement = derniereDiv.firstElementChild

console.log(firstElement);

//2

let lastElement = derniereDiv.lastElementChild
console.log(lastElement);

// 3

let firstPara = derniereDiv.getElementsByTagName('p')[0];

let elementI = firstPara.lastElementChild

console.log(elementI);

// 4
let lastPara = derniereDiv.lastElementChild

let elementB = lastPara.lastElementChild

console.log(elementB);

//5 

console.log(elementI.parentElement);

//6

console.log(elementB.parentElement);

//7 

console.log(firstElement.nextElementSibling);