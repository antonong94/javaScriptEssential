// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "block var"
var blockVar = "new block var"
let blockLet = "let"
blockLet = "new blockLEt"
const block = "abc"
}
block = "fff"
blockVar = "outside blockVar"
blockLet = "outside"

console.log(globalConst)
console.log(blockVar)
console.log(blockLet)
console.log(block)