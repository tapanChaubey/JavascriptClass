let ob={
    name:"Tapan",
    id:"1234",
    marks:"98",
  rosan:  {
        Number:"1234"

    }
}
// let user=ob;
// user.name="vishal";
// console.log(user.name)
// console.log(ob.name);
// jab ham ek  object ko dusare me copy karate hai to us object ka value copy nahi us object 
// refrence copy ho jata hai
// es ke liye hi shallow copy  consept laya gaya hai taki es probleme ko resolve 
// kiya jaye;
// ye do type se kiya jata hai
// (1.) 
// let user={...ob};
// user.name="vijay"
// console.log(ob);
// console.log(user)
// es ko solve karne ke liye  destructure  rule use karna padata hai.
// 2.)
// let user=Object.assign({},ob);
// user.name="shubham"
// console.log(user);
// console.log(ob); 
//////////////////////////////////////////////////////////////////////////////////
// Deep Copy 
// ager object ke aur maltipal object ho to use type ke object copy karnae ke liye 
// deep copy ka use karna padta hai taki maltipal object copy ho jaye.
let user=JSON.parse(JSON.stringify(ob));
user.rosan.Number="1234567890"
console.log(user);
console.log(ob)
// ye deep copy hai way hai



