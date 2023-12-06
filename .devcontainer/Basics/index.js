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
