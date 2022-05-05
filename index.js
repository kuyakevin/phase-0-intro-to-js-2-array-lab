// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat() {
    cats.push('Ralph'); 
}
function destructivelyPrependCat() {
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(cat) {
    const newArray = [...cats, cat];
    return newArray
}
function prependCat(cat) {
    const newArray = [cat, ...cats];
    return newArray
}
function removeLastCat() {
    const newArray = [...cats]
    newArray.pop();
    return newArray;
}
function removeFirstCat() {
    const newArray = [...cats]
    newArray.shift();
    return newArray;
}