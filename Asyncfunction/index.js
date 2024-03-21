
 let h1=document.querySelector('h1');
// async function greet(color,delay){
//     setTimeout(()=>{
//         h1.style.color=color;
//        m=true;

//     },delay)
//     return "done";
// }
// greet("red",1000).then((data)=>{
//     console.log("success : !",data);
//     return greet("blue",2000);
// }).then((data)=>{
//     console.log("success : !",data);
//     return "done";
// }).catch((err)=>{
//     console.log("promise was rejected !",err);
// })
////////////////////////////////////////////////////////////////////////////
function getdata(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("reject this promise!");
            }
            console.log(num);
            resolve();
            h1.style.color=color;

        },delay)
    })
}
async function demo(){
    try{
    await getdata("red",1000);
    await getdata("blue",1000);
    await getdata("green",1000);
    await getdata("hotpink",1000);
    await getdata("orange",1000);
     getdata("gray",1000);
    } catch(err){
        console.log(err);

    }
   
}
demo();