let form=document.querySelector("form");
form.addEventListener('submit',function(event){
    event.preventDefault();
    // es method se hum esi location per rahate hai.
//    alert('hello');
//    let text=document.getElementById('text');
//    let num=document.getElementById('number');

//    console.log(text.value);
//    console.log(num.value);

})
let text=document.getElementById('text');
// text.addEventListener('change',function(event){
//     console.log('chaged value');
//     console.log(this.value);
// })
text.addEventListener('input',function(event){
        console.log('chaged value');
        console.log(this.value);
     })