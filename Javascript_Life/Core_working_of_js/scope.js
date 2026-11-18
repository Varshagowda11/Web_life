//!Global scope
// console.log(data);
// function print(){
//     let name="rani"
//     console.log(data);
//     console.log(name); 
// }
// var data="somu"
// console.log(data)
// print()



//!function scope
// console.log(data);
// function print(){
//     let name="rani"
//     console.log(data); 
// }
// console.log(name);
// var data="somu"
// console.log(data)
// print()


// let x=10
// function print(){
//     let x=20
//     console.log(x);
// }
// print();
// console.log(x);

// let x=10
// function print(){
//      x=20
//     console.log(x);
// }
// print();
// console.log(x);

//  x=10
// function print(){
//     let x=20
//     console.log(x);
// }
// print();
// console.log(x);

//  x=10
// function print(){
//      x=20
//     console.log(x);
// }
// print();
// console.log(x);

//!block scope
// let flag=true
// if(flag)
// {
//     let data=100
//     console.log(data)
// }
// else
// {
//     let data=200
//     console.log(data)
// } //100

// let flag=true
// if(flag==false)
// {
//     let data=100
//     console.log(data)
// }
// else
// {
//     let data=200
//     console.log(data)
// } //200

// let flag=true
// if(flag)
// {
//     let data=100
//     console.log(data)
// }
// else
// {
//     let data=200
//     console.log(data)
// } 
// console.log(data) //error


// let flag=true
// if(flag)
// {
//     var data=100
//     console.log(data)
// }
// else
// {
//     var data=200
//     console.log(data)
// } 
// console.log(data); //100 //100


//!lexical and scope chaning
let data1="somu"
function outerfunction()
{
    let data2="rani"
    function innerfunction()
    {
         let data3="raja"
         console.log(data1);
         console.log(data2);
         console.log(data3);
         
    }
    innerfunction()
}
outerfunction()
