// destructing operator 
let a=[1,5,7,8,9];
let [b,c,x,...z]=a;
console.log(z)
// o/p=>
// [8,9]



// by objects 
let ten={
    name : "abi",
    age : 20}

let {name,...y}=ten; //specify object names such as name ,age etc
console.log(y);

// o/p=> age : 20