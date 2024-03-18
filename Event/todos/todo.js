let input=document.getElementById('input-1');
let btn=document.getElementById('btn');
let ul=document.getElementById('ul');
btn.addEventListener('click',function(){
let li=document.createElement('li');
let deletebtn=document.createElement('button');
deletebtn.innerHTML='delete';
deletebtn.classList.add('btn-1');
li.innerHTML=`${input.value}`
li.appendChild(deletebtn);
ul.appendChild(li);
input.value="";
})
ul.addEventListener('click',function(event){
    if(event.target.nodeName=='BUTTON'){
        let listitem=event.target.parentElement;
        listitem.remove();
    }
    
})




