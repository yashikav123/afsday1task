function spreadExample(...values)
{
console.log(values);
}
spreadExample(1,2,3,4,5);

// o/p=>[1,2,3,4,5]

// passing objects 
let sttudent1={
    name : "abi",
    age : 20}
let b={...sttudent1}
{
console.log(b);
}
// o/p==>{name: 'abi', age: 20}

