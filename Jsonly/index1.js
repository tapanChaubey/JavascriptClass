function datasaved(data,success,failiar){
    let internatespeed=Math.floor(Math.random()*10)+1;
    if(internatespeed>4){
        success(internatespeed,data);
    }
    else{
        failiar(internatespeed);
    }
}
datasaved("tapan kumar",(internatespeed,data)=>{
console.log(internatespeed);
console.log("data was saved",data);
datasaved("chaubey",(internatespeed,data)=>{
    console.log(internatespeed);
    console.log(" success2 data was saved",data);

},(internatespeed)=>{
    console.log(internatespeed,"failiar2: is week internate spaeed");
})

},(internatespeed)=>{
console.log(internatespeed," is week internate spaeed");
});