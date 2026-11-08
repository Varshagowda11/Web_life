
//!17. some()
// let data=[1,2,3,4,5,6]
// console.log(data.some((num) => num>5)) //true

const { a, b } = require("framer-motion/client");

//!18 fill()
// let data=[1,2,3,4,5,6]
// console.log(data.fill("somu",0,5)) //[ 'somu', 'somu', 'somu', 'somu', 'somu', 6 ]

//!19 find()
// let data=[1,2,3,4,5,6]
// console.log(data.find((num)=>num%2==1)) //1

//!20 findIndex()
// let data=[1,2,3,4,5,6]
// console.log(data.findIndex((num)=>num%2==1)) //0

//!21 findLast()
// let data=[1,2,3,4,5,6]
// console.log(data.findLast((num)=>num%2==1)) //5

//!22 findLastIndex()
// let data=[1,2,3,4,5,6]
// console.log(data.findLastIndex((num)=>num%2==1)) //4

//!23 flat()
// let data=[1,2,[3,4],[5,6]]
// console.log(data.flat()) //[ 1, 2, 3, 4, 5, 6 ]
// let data=[1,2,[3,4,[5,6]]] 
// console.log(data.flat(2)) //[ 1, 2, 3, 4, 5, 6 ]
// let data=[1,2,[3,4]]
// console.log(data.flat()) //[1,2,3,4]
// let data=[1,2,[3,4,[5,6]]]
// console.log(data.flat()) //[ 1, 2, 3, 4, [ 5, 6 ] ]

// let data=[1,[2,[3,[4,[5,6]]]]]
// console.log(data.flat(Infinity)) //[ 1, 2, 3, 4, 5, 6 ]

//!torevse()
// let data=[1,2,3,4,5]
// console.log(data.toReversed()) //[ 5, 4, 3, 2, 1 ]
// console.log(data)

//!tosplice()
// let data=[1,2,3,4,5]
// console.log(data.toSpliced(1,0,"somu")) //[ 1, "somu",2,3, 4, 5 ]
// console.log(data) //[ 1, 2, 3, 4, 5 ]

//!toString()
// let data=[1,2,3,4,5]
// console.log(data.toString()) //1,2,3,4,5

//!sort()
// let data=[1,2,3,4,5]
// let colors=["black","white","red"]
// let data1=[1,8,10,20,3]
// console.log(data1.sort((a,b)=>a-b)); //[ 1, 2, 3, 4, 5 ] 
// console.log(data1.sort()); //[ 1, 10, 20, 3, 8 ] //sorts as string
// console.log(data.sort((a,b)=>b-a)) //[ 5, 4, 3, 2, 1 ] //descending order
// console.log(data.sort()) //[ 1, 2, 3, 4, 5 ] //ascending order
// console.log(colors.sort()) //[ 'black', 'red', 'white' ]
// console.log(data);
// console.log(data1);
// console.log(colors);

//!toSorted()
// let data2=[1,8,10,20,3]
// console.log(data2.toSorted((a,b)=>a-b));
// console.log(data2)


