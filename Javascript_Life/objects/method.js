
//!to print methods ,keys()  values()  entries()  fromentries()
// let data={
//     name:"somu",
//     age:20,
//     Flag:true
// }
// console.log(data);
// console.log(Object.keys(data))
// console.log(Object.values(data))
// let newdata=Object.entries(data)
// console.log(newdata)
// console.log(Object.fromEntries(newdata))



//! Object.assigns
// let user1={
//     name:"somu"
// }
// let user2={
//     age:20
// }
//?1
// let user=Object.assign({},user1,user2)
// console.log(user);
// let user3={
//     gender:"male"
// }
//?2
// let user=Object.assign(user3,user1,user2)
// console.log(user3);

//!Object.seal
// let user={
//     name:"somu",
//     age:20,
//     pan_no:1234,
//     LoggedIn:true
// }
// Object.seal(user)
// delete user.pan_no
// user.ref="rani"
// user.age=21
// console.log(user)

//!Object.Issealed
// let user={
//     name:"somu",
//     age:20,
//     pan_no:1234,
//     LoggedIn:true
// }
//?1
// Object.seal(user)
// if(Object.isSealed(user))
// {
//     console.log("oo shit i cant do it futher");
    
// }
// else{
//     console.log("come on we can do some khand");
    
// }

//?2
// if(Object.isSealed(user))
// {
//     console.log("oo shit i cant do it futher");
    
// }
// else{
//     console.log("come on we can do some khand");
    
// }

//!Object.freeze
// let user={
//     name:"somu",
//     age:20,
//     pan_no:1234,
//     LoggedIn:true
// }
// Object.freeze(user)
// delete user.pan_no
// user.ref="rani"
// user.age=21
// console.log(user)

//!Object.isfrozen
// let user={
//     name:"somu",
//     age:20,
//     pan_no:1234,
//     LoggedIn:true
// }
// ?1
// Object.freeze(user)
// if(Object.isFrozen(user))
// {
//     console.log("oo shit i cant do it futher");
    
// }
// else{
//     console.log("come on we can do some khand");
    
// }

// ?2
// if(Object.isFrozen(user))
// {
//     console.log("oo shit i cant do it futher");
    
// }
// else{
//     console.log("come on we can do some khand");
    
// }

//!Object.hasOwn
// let user={
//     name:"somu",
//     age:20,
//     pan_no:1234,
//     LoggedIn:true
// }
// let data=Object.hasOwn(user,"name")
// console.log(data)

//!Object.is
let user={
    name:"somu",
    age:20,
    pan_no:1234,
    LoggedIn:true
}
// let data=Object.is(user.age,20)
let user1={
    name:"rani",
    age:20,
}
let data=Object.is(user,user1)
// let data=Object.is(user,{name:"rani",age:20})
console.log(data)

