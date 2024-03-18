const gmaesequ = [];
let usersequ = [];
const colorarr = ["red", "yellow", "green", "blue"];
let level = 0;
let started = false;
const h2 = document.querySelector('h2');

document.addEventListener("keypress", function () {
    if (started==false) {
        console.log('Game started!');
        started = true;
        levelup();
    }
});
function btnfalse(randomBtn){
    randomBtn.classList.add('flash');
    setInterval(function(){
        randomBtn.classList.remove('flash');

    },1000)
}
function levelup() {
    usersequ = [];
    level++;
    
     h2.innerHTML = `Level ${level}`;
    const randomIndex = Math.floor(Math.random() * 3); // Corrected the random index range
    const randomColor = colorarr[randomIndex];
    const randomBtn = document.querySelector(`.${randomColor}`);
    // console.log(randomIndex);
    // console.log(randomBtn);
    gmaesequ.push(randomColor);
    console.log(gmaesequ);
    btnfalse(randomBtn);
}
function  userfalse(btn){
btn.classList.add('userflase');
setInterval(function(){
    btn.classList.remove('userflase');
},1000)
}
function btnpress(){
    let btn=this;
    userfalse(btn);
    userbtn=btn.getAttribute('id');
    console.log(userbtn);
    usersequ.push(userbtn);
    console.log(usersequ);
    checkAns(usersequ.length-1);
}
let allbtn=document.querySelectorAll('.btn');
for(bt of allbtn){
    bt.addEventListener('click',btnpress);
}
function checkAns(ind){
   
    if(usersequ[ind]==gmaesequ[ind]){
        if(usersequ.length==gmaesequ.length){
            levelup();
        }
    }
    else{

        h2.innerHTML = `Game is over! Your Score is = ${level} ! And Please Press Any Key To Start The Game`; 
    }
    
}
