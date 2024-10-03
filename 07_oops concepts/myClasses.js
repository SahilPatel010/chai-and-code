// class user{
//     constructor(userName,email,password){
//         this.userName=userName
//         this.email=email
//         this.password=password
//     }
//     encryptPass(){
//         return `${this.password}abc`
//     }
//     capitalizeUsername(){
//         return `${this.userName.toUpperCase()}`
//     }
// }

// const chai=new user("Bruce","bat@gmail.com",1234)

// console.log(chai.encryptPass());
// console.log(chai.capitalizeUsername());

//behind the scenes

function user(userName,email,password){
    this.userName=userName
    this.email=email
    this.password=password
}

user.prototype.encryptPass=function () {
    return `${this.password}abc`
}

user.prototype.capitalizeUsername=function () {
     return `${this.userName.toUpperCase()}`
}

const chai=new user("Bruce","bat@gmail.com",1234)

console.log(chai.encryptPass());
console.log(chai.capitalizeUsername());