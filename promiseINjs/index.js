// function savedata(data){
//     return new Promise((resolve,reject)=>{
//         let internatespeed=Math.floor(Math.random()*10)+1;
//         if(internatespeed>4){
//             resolve(data);
//         }
//         else{
//             reject("bad internatespeed !");
//         }
//     })
// }
// let request=savedata("tapan kumar").then((data)=>{
//     console.log("promise resolve!");
//      console.log(data)
//     return savedata("apana collage");
// }).then((data)=>{
//     console.log(data);

// })
// .catch((data)=>{
//     console.log("promise is rejected !");
//     console.log(data);
// })
/////////////////////////////////////////////////////////////////////////
// Color change function
let h1=document.querySelector('h1');
function colorchange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve('success !');
        },delay) 
    })
}

colorchange("red",1000).then((data)=>{
    console.log("red color was set !",data);
    return colorchange("orange",1000);
}).then((data)=>{
    console.log("orange was set !",data);
    return colorchange("blue",1000);
}).then((data)=>{
    console.log("blue color was set !",data);
})
.catch((err)=>{
    console.log(err);
})