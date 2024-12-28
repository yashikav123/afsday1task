// TO AVOID CALLBACKS WE UUSE PROMISE	

// * await which is wait for fetching data 
// *in same function you can use so many await function 
// *await function should be writterrn in promise
// * try and catch method also used in this for better practise 

function attendence(){
    return new Promise((resolve,reject) =>{
        let atten=true
        if(atten)
            resolve("present")
        else
            reject("absent")
    })
}
function lunch(){
    return new Promise((resolve,reject) =>{
        let lun=true
        if(lun)
            resolve("ate")
        else
            reject("noteat")
    })
}
function goingtohome(){
    return new Promise((resolve,reject) =>{
        let home=true
        if(home)
            resolve("went")
        else
            reject("notwent")
    })
}
attendence().then((value)=>{console.log(value); return lunch()})
            .then((value)=>{console.log(value); return goingtohome()})
            .then((value)=>{console.log(value); console.log("day completed")})
            .catch(error=>console.error(error))