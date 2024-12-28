// // //spread operators
// // (...)
// // it is used to combine all values in the array not address
// let a=[1,2,3,4,5]
// let b=[...a];
// b[2]=10;
// console.log(b);
// console.log(a);


// // o/p
// // [1,2 10,4,5]
// // [1,2,3,4,5]



// let a=[1,2,3,4,5]
// let b=a;
// b[2]=10;
// console.log(b);
// console.log(a);

// // o/p
// // [1,2 10,4,5]
// // [1,2 10,4,5]

let a=[1,2,3,4,5]
let x=[6,7,8,9]
let b=[...a,...x]
console.log(b);

// o/p
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
