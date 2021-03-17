const { it } = require("mocha");

//function soma(a,b){
//  return a+b;
//}

// const soma = function(a,b){
//   return a+b;
// }

// const soma = (a,b) => {
//   return a+b;
// }

const soma = (a,b) => a+b
const sub = (a,b) => a-b
const mul = (a,b) => a*b
const div = (a,b) => a/b

console.log(soma(1,4))
console.log(sub(5,4))
console.log(mul(2,4))
console.log(div(8,4))

it('a function test', function(){
  console.log('Functions',this)
})
