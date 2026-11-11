// ! INSTANCE METHODS

// ! 1. push()
// let data = [1,2,3,4,5]
// data.push("somu");
// console.log(data);  // [1,2,3,4,5,'somu']

// ! 2. pop()
// let data = [1,2,3,4,5]
// data.pop();
// console.log(data);   // [1,2,3,4]

// ! 3. shift()
// let data = [1,2,3,4,5]
// data.shift();
// console.log(data); // [2,3,4,5]

// ! 4. unshift()
// let data = [1,2,3,4,5]
// data.unshift(10);
// console.log(data);  // [10,1,2,3,4,5]

// ! 5.slice()
// let data = [10,20,30,40,50]
// console.log(data.slice(1))   // [20,30,40,50]
// console.log(data.slice(2,5)) // [30,40,50]
// console.log(data.slice(-2))  // [40,50]
// console.log(data.slice(5,2)) // []

// ! 6.splice()
// let data = [10,20,30,40,50]
// let deleteditems = (data.splice(1,2)) 
// console.log("deleted items are :"+deleteditems)
// console.log(data) // [10,40,50]

// let data = [10,20,30,40,50]
// let deleteditems = (data.splice(1,2,"somu","rani","rama")) 
// console.log(data)  // [10,'somu','rani','rama',40,50]

// let data = [10,20,30,40,50]
// let deleteditems = (data.splice(1,0,"somu","rani","rama")) 
// console.log(data) // [10,'somu','rani','rama',20,30,40,50]

// ! 7. concat()
// let data1 = [10,20]
// let data2 = [30,40]
// let data3 = data1.concat(data2)
// console.log(data3)  // [10,20,30,40]

// ! 8. reverse()
// let data = [10,20,30,40]
// console.log(data.reverse()) // [40,30,20,10]

// ! 9. join()
// let data = [10,20,30,40,50]
// console.log(data.join())  // 10,20,30,40,50

// using seperator

// console.log(data.join("-")) // 10-20-30-40-50
// console.log(data.join(""))  // 1020304050
//console.log())

// ! 10.indexOf()
// let data = [10,20,30,40,30]
// console.log(data.indexOf(30))  // 2
// console.log(data.indexOf(300)) // -1

// ! 11. lastIndexOf()
// let data = [10,20,30,40,30]
// console.log(data.lastIndexOf(30))  // 4
// console.log(data.lastIndexOf(300)) // -1

// ! 12. include()
// let data = [20,40,60,70,40]
// console.log(data.includes(40))  // true
// console.log(data.includes(80))  // false
// console.log(data.includes(40,2)) // true (we can give star index ==>2)
// console.log(data.includes(20,2)) // false (we can give star index ==>2)

// ! 13.entries()
// let data = [10,20,30,40,50]
// console.log(data.entries()) // object [Array Iterator] {}
// // so we are using loop to iterate

// for(let x of data.entries())
// {
//     console.log(x)        // [0,10]
//                           // [1,20] like thse all elements
// }

// ! 14.keys()
// let data = [10,20,30,40,50]

// for(let x of data.keys())
// {
//     console.log(x)      // 0 1 2 3 4 --> keys we will get  
// }

// ! 15.values()
// let data = [10,20,30,40,50]

// for(let x of data.values())
// {
//     console.log(x)      // 10 20 30 40 50 --> values we will get  
// }

// ! 16.every()
// let data = [2,4,6,8]
// console.log(data.every((num)=> num%2 == 0)) // true

// let data = [2,4,6,8,9]
// console.log(data.every((num)=> num%2 == 0)) // false


// let data1 = ['red','green','blue']
// console.log(data1.every((num)=>num !== undefined)) // true

// let data1 = ['red','green','blue','undefined']
// console.log(data1.every((num)=>num !== 'undefined'))  // false

// ! 17. some()
// let data = [1,2,3,4,5,6,7,8]
// console.log(data.some((num)=> num > 7))   // true

// let data = [1,2,3,4,5,6,7,8]
// console.log(data.some((num)=> num > 8))     // false

// ! 18. fill()
// let data = [1,2,3,4,5]
// console.log(data.fill("Ammu",1,3)) // [1,Ammu,Ammu,4,5]
// console.log(data)  // [1,Ammu,Ammu,4,5] original array is modified
// console.log(data.fill(8,1,3))

// ! 19. find()
// let data = [1,2,3,4,5,6]
// console.log(data.find((num) => num %2 ===0))   // 2

// let data = [1,2,3,4,5,6]
// console.log(data.find((num) => num %2 !=0))   // 1

// let data = [1,2,3,4,5,6]
// console.log(data.find((num) => num > 4))   // 5

// ! 20. findIndex()
// let data = [1,2,3,4,5,6]
// console.log(data.findIndex((num) => num %2 !=0))  // 0

// let data = [1,2,3,4,5,6]
// console.log(data.findIndex((num) => num %2 ===0))   // 1

// ! 21. findLast()
// let data = [1,2,3,4,5,6]
// console.log(data.findLast((num) => num %2 ===0))   // 6

// ! 22. findLastIndex()
// let data = [1,2,3,4,5,6]
// console.log(data.findLastIndex((num) => num %2 ===0))   // 5

// ! 23. flat()
// let data = [1,2,3,4,[10,20]]
// console.log(data.flat())   // 1,2,3,4,10,20

// let data = [1,2,3,4,[10,20,[10,20]]]
// console.log(data.flat(2))  // 1,2,3,4,10,20,10,20

// let data = [1,2,3,4,[10,20,[10,20,[200,300]]]]
// console.log(data.flat(3))  // 1,2,3,4,10,20,10,20,200,300

// let data = [1,[2,[3,[4,[10,20,[10,20,[200,300]]]]]]]
// console.log(data.flat(Infinity)) 

// ! 24. toReversed()
// let data = [1,2,3,4,5]
// console.log(data.toReversed()) ; // [5,4,3,2,1]
// console.log(data);  // [1,2,3,4,5]

// ! 25. toSpliced()
//  let data = [1,2,3,4,5]
// console.log(data.toSpliced(1,3,"Ammu")) ; // [1,'Ammu',5]
// console.log(data); // 1,2,3,4,5

//  let data = [1,2,3,4,5]
// console.log(data.toSpliced(1,0,"Ammu")) ; // [ 1, 'Ammu', 2, 3, 4, 5 ]
// console.log(data); // [ 1, 2, 3, 4, 5 ]

// ! 26. toString()
// let data = [1,2,3,4,5]
// console.log(data.toString());  // 1,2,3,4,5
// console.log(data)   //[1,2,3,4,5]

// ! 27.sort()
// let data = [1,5,3,8,6,5]
// console.log(data.sort())  // [1,3,5,5,6,8]
// console.log(data)        // [ 1, 3, 5, 5, 6, 8 ]

// let data = [1,20,3,10,6,5]
// console.log(data.sort())  // [ 1, 10, 20, 3, 5, 6 ]
// console.log(data)    // [ 1, 10, 20, 3, 5, 6 ]

// so we use functions
//  let data = [1,20,3,10,6,5]
// console.log(data.sort((a,b) => a-b))  // [ 1, 3, 5, 6, 10, 20 ]
// console.log(data)    // [ 1, 3, 5, 6, 10, 20 ] ascending order

// let data = [1,20,3,10,6,5]
// console.log(data.sort((a,b) => b-a))  // [ 20, 10, 6, 5, 3, 1 ]
// console.log(data)   // [ 20, 10, 6, 5, 3, 1 ]

// let data = [1,20,3,10,6,5]
// console.log(data.sort(function(a,b){
//console.log("a = "+a + "and" + "b = "+b)
//     return b-a }))  // [ 20, 10, 6, 5, 3, 1 ]
// console.log(data)   // [ 20, 10, 6, 5, 3, 1 ]



// ! 28. toSorted()
//  let data = [1,20,3,10,6,5]
// console.log(data.toSorted((a,b) => b-a))  // [ 20, 10, 6, 5, 3, 1 ]
// console.log(data)  // [ 1, 20, 3, 10, 6, 5 ]




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


