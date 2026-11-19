
//!to print methods ,keys()  values()  entries()  fromentries()
let data={
    name:"somu",
    age:20,
    Flag:true
}
console.log(data);
console.log(Object.keys(data))
console.log(Object.values(data))
let newdata=Object.entries(data)
console.log(newdata)
console.log(Object.fromEntries(newdata))
