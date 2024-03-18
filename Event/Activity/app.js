let div=document.getElementById('main');
let btn=document.getElementById('btn');
let h1=document.getElementById('h1-1');
btn.addEventListener('click',change1)
h1.addEventListener('click',change1)
div.addEventListener('click',change1)
function change1(){
    console.log(this.innerText);
    this.style.backgroundColor='red';
    this.style.color='white';
}

// btn.addEventListener('click',function(){
//     let h=document.getElementById('h1-1');
//     let randomcolor=getrandom();
//     h.innerText=randomcolor;
//     div.style.backgroundColor=`${getrandom()}`
//     console.log(this);
    
// })
// function getrandom(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
//     let color=`rgb(${red},${green},${blue})`
//     return color;
// }
