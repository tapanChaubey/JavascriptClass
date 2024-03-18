let btn=document.getElementById('btn');
let input=document.getElementById('input1');
// input.addEventListener('keyup',function(event){
//     console.log("key was press");
//     //console.log(event.key);
//     console.log(event.code);
    
// })
input.addEventListener('keydown',function(event){
    if(event.code=='ArrowDown'){
        console.log('character backword');
    }
    else if(event.code=='ArrowLeft'){
        console.log('character left');
    }
    else if(event.code=='ArrowRight'){
        console.log('character is right');
    }
    else if(event.code=='ArrowUp'){
        console.log('character is up');
    }
})