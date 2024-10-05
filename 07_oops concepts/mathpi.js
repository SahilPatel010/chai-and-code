// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descriptor);

const tea={
    name:"gingerTea",
   price:20,
    isAvailable:true,

    orderTea:function(){
        console.log("chai not ready");
    }
}



Object.defineProperty(tea,"name",{
    writable:false,
    enumerable:false,
})

Object.defineProperty(tea,"price",{
    writable:false,
    enumerable:false,
})

Object.defineProperty(tea,"isAvailable",{
    writable:false,
    enumerable:true,
})

// //console.log(Object.getOwnPropertyDescriptor(tea,"name"));

// tea.name="MasalaChai"

// console.log(tea.name);
for (let [key,value] of Object.entries(tea)) {
    if (typeof value!=="function") {
        console.log(`${key}:${value}`);   
   }
   
}