// function greeting(call) {
//     console.log("Welcome to xyz cafe");
//     console.log("You can oder here")
//     call()
// }
// function Briyani() {
//     console.log("thank you for order..");
//     console.log("your order briyani is ready");
//     console.log("here is your oder");
// }
// function veg_biriyani() {
//     console.log("thank you for order..");
//     console.log("your order briyani is ready");
//     console.log("here is your oder");
// }
// greeting(Briyani)


//? without callback hof
// function greeting() {
//     console.log("Welcome to xyz cafe");
//     console.log("You can oder here")
//     // Briyani()
//     // veg_biriyani()
// }
// function Briyani() {
//     console.log("thank you for order..");
//     console.log("your order briyani is ready");
//     console.log("here is your oder");
// }
// function veg_biriyani() {
//     console.log("thank you for order..");
//     console.log("your order veg-briyani is ready");
//     console.log("here is your oder");
// }
// greeting()


// function greeting() {
//     console.log("Welcome to xyz cafe");
//     console.log("You can oder here")
//     console.log("......");
    
//     Briyani()
//     takeaway()
//     // veg_biriyani()
// }
// function Briyani() {
//     setTimeout (()=> {
//         console.log("thank you for order..");
//     console.log("your order briyani is ready");
//     console.log("here is your oder");

//     },5000)
// }
// function veg_biriyani() {
//     console.log("thank you for order..");
//     console.log("your order veg-briyani is ready");
//     console.log("here is your oder");
// }
// function takeaway()
// {
//     console.log("your order is ready for take away");
    
// }
// greeting()


function greeting(call,takeaway) {
    console.log("Welcome to xyz cafe");
    console.log("You can oder here")
    console.log("......");
    call(takeaway)
    
}
function Briyani() {
    setTimeout (()=> {
        console.log("thank you for order..");
    console.log("your order briyani is ready");
    console.log("here is your oder");
    takeaway()

    },5000)
}
function veg_biriyani() {
    console.log("thank you for order..");
    console.log("your order veg-briyani is ready");
    console.log("here is your oder");
}
function takeaway()
{
    console.log("your order is ready for take away");
    
}
greeting(Briyani,takeaway)

