 const mySym1=Symbol("");

const Jsuser={
    name:"Sahil",
    [mySym1]:"key1",
    "full Name":"Sahil Wayne",
    age:18,
    email:"sahil@gmail.com",
    isSmart:true,
    LoginDays:["Monday","Friday"],
}

// wrong methodconsole.log(Jsuser.full Name);
// console.log(Jsuser[mySym1]);
// Jsuser["full Name"]="Sahil Patel"
//  Object.freeze(Jsuser);
// Jsuser["full Name"]="Sahil Wayne"
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("Hello Js user");   
}
Jsuser.greeting2=function(){
    console.log(`Hello Js user,${this["full Name"]}`);   
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());


