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
async function finalDay(){
    try {
        let attendences = await attendence();
        console.log(attendences)
        let lun = await lunch()
        console.log(lun)
        let home = await goingtohome()
        console.log(home)
    }
    catch (error)
    {
        console.error(error)
    }
}
finalDay()
