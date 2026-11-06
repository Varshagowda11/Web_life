// function task(fun)
// {
//     fun()
// }
// task(function ()
// {
//     console.log(10+20);
    
// })

// function task()
// {
//    return function ()
// {
//     console.log("thank you");
    
// }
// }
// let result=task()
// result()

//? both call back and hof

function add(a,b){
    return a+b
}

function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
function calci(callback,a,b){
   console.log(callback(a,b));
    
}
calci(mul,10,20)
