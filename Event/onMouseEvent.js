let btn=document.querySelectorAll('#btn');
for(btns of btn){
//  btns.onmouseenter=function(){
//      console.log("hello");
//  }
// btns.addEventListener("click",sum)
// btns.addEventListener("click",sub);
btns.addEventListener('dblclick',function(){
    console.log("hello welcome");
})
}
function sum(){
    let a=5,b=6;
    console.log(a+b);
}
function sub(){
    let a=5,b=6;
    console.log(a-b);
}