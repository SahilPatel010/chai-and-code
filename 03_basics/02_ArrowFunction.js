// const user={
//     userName:"Sahil",
//     priceOfProduct:199,

//     welcomeMsg:function() {
//         console.log(`${this.userName},Welcome Back`);
//         console.log(this);
        
//     }
// }
// user.welcomeMsg()
// user.userName="Ayyan"
// user.welcomeMsg()

// console.log(this);

// function one() {
//     let username="Sahil"
//     console.log(this.username);
    
// }
// one()

// const chai=(params) => {
//     let userName="Sahil"
//     console.log(this.userName);
    
// }
// chai()

// const addTwoNum=(num1,num2)=>{
//     console.log("the result is : ",num1+num2);
    
// return num1+num2

// console.log(addTwoNum());
// const addTwoNum=(num1,num2)=>{
//     console.log("the result is : ",num1+num2);
    
// return num1+num2
// }
// console.log(addTwoNum());









// const addTwoNum=(num1,num2)=> num1+num2

// console.log(addTwoNum(3,5));

// const addTwoNum=(num1,num2)=>({username:"Sahil"})

// console.log(addTwoNum());

(function chai() {
    //Named IIFE
    console.log("DB Connected")
})();

((userName)=>{
    //UNamed IIFE
    console.log(`DB2 CONNECTED ${userName}`);
})("Sahil")