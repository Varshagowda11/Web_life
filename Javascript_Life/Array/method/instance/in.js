
//!17. some()
// let data=[1,2,3,4,5,6]
// console.log(data.some((num) => num>5)) //true

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