// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
const catsCopy = [...cats];

function appendCat(name) {
    const catsCopy = [...cats]; 
    catsCopy.push(name); 
    return catsCopy; 
 }
function prependCat(name) {
    const catsCopy = [...cats]; 
    catsCopy.unshift(name); 
    return catsCopy; 
}
function removeLastCat(name) {
    const catsCopy = [...cats]; 
    catsCopy.pop(name); 
    return catsCopy; 
}
function removeFirstCat(name) {
    const catsCopy = [...cats]; 
    catsCopy.shift(name); 
    return catsCopy; 
}