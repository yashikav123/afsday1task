//for loops
for(initializtion;conditiopn;inc/dec)
{
    statements 
}


//2)
let a=1;
for (console.log('a');a<=3;console.log('b'))
{
    console.log('C');
    a++;
}
// o/p=>
//  a c b c b c b

// 3)
let a=1;
for(a=1;a<100;a++);
console.log("hi");
console.log(a);

// hi 
// 100


// 4)
let a=1;
for(a=1;a<100;a++)
console.log("hi")
console.log(a);

// 99-hi
// 100


// 5)

for(var a=1;a<100;a++)
console.log("hi")
console.log(a);

// 99-hi
// 100

// 6)

for(let a=1;a<100;a++)
console.log("hi")
console.log(a);

// 99-hi
// error because let only have scope within loop when it comes out it will provide error


// for and while are entry check  loops
