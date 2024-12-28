// passing function as ana argument to other function is called call back



// CALL BACK

function dog(callback)
{
    setTimeout(()=>
    {
        console.log("Jack the dog");
        callback();
    },2000);
}
function cat()
{
    console.log("Tom the cat");
}
dog(cat);

  
// o/p=>
// Jack the dog

// Tom the cat


// CALL BACK HELL
// ------------------------------------------------------------------------------

function attendence(callbacks)
{  setTimeout(()=>
{
    console.log("I am attending the class");
    callbacks();
},2000)
}
function lunch(callbacks)
{
  setTimeout(()=>
  {
console.log("I am having lunch");
callbacks();
  },2000)
}
function goinghome(callbacks){
  setTimeout(()=>
  { 
  console.log("I am going home");
  callbacks();
  },2000)
}

attendence(()=>{
  lunch(()=>{
    goinghome(()=>{
      console.log("day completed");
    })
  })
})

// O/P=>
// I am attending the class
// I am having lunch
// I am going home
// day completed
