// call stack topic
function one(){
    return 1;
}
function two(){
    return one()+one();

}
function three(){
    let ans=one()+two();
    console.log(ans);
}
three();
console.log("done");
// callback-hell 
// let h1=document.querySelector('h1');
// let div=document.querySelector('div');
// function changecolor(color,delay,nextchangecolor){
//  setTimeout(() => {
//     div.style.backgroundColor=color;
//     nextchangecolor();
// }, delay);

// }
// changecolor("red",1000,()=>{
//     changecolor("green",1000,()=>{
//         changecolor("blue",1000,()=>{
//             changecolor("orange",1000);
//         })
//     })
// })