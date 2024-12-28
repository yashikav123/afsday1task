


// callback example

let a="abc";
function one(callback)
{  
    setTimeout(()=>{
        console.log(`file ${a} is progressing`);
        callback();
    },1000)
}

function two(callback)
{
    setTimeout(()=>{
        console.log(`file ${a} is completed`);
        callback();
    },2000)
}
function complet()
{
    console.log('download completed');
}
one(()=>{
    two(()=>{
        complet(()=>{
            
        })
    })
})
// // what is react // is react single page application or not what is single page application 
// //(condition)?true:false==>ternary operator
// 31/04/2024 -invalid
// 29/02/2001 - valid3                                                                
// ++++++