console.log("hello");
let balance= 400;
let cash = new Number(400);
console.log(typeof balance);
console.log( cash);


let arry=[1,2,3,4,5];
let newArry=arry.slice(1,3);
console.log(`Slice of array : ${newArry}`);
console.log("Array first", arry);

// Here in splice , manipulates the original array 
let arry2= arry.splice(1,3);
console.log(`Splice of an Array: ${arry2}`);
console.log("Array Second", arry);



let one=[1,2,3,4,5];
let two=[6,7,8];
let three=[...one,...two];
// spread operator ...
console.log(three);

let score=100;
let score2=200;
let score3=300;

console.log(Array.of(score,score2,score3));

console.log(Array.from("Mausam"));
let ars=[1,2,[3,4],[6,7,[8]]];
console.log(ars.flat(Infinity));

console.log(func(9))

function func(num){
return num+1;
}


// hoisting
// console.log(add(5));
// const summ=function funct(nums){
//     return nums+1;
// }


// IIFE immidiate invoked function expression

(function fun(){
    console.log({name:'Mausam'})
})();