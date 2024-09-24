// const promiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//     console.log("Async Task completed");
//     resolve()
//     },2000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("asyn task 2 completed");
//         resolve()
//     },2000)
// }).then(function(){
//     console.log("Promise 2 consumed");
// })


 const promiseThree=new Promise(function(resolve,reject){
     setTimeout(function(){
         resolve({
          userName:"Bruce" ,age:31,
          Profession:"Batman" 
         })
     },500)
 })

 promiseThree.then(function(statement){
    console.log(statement);
  })
// const promiseFour=new Promise(function(resolve,reject){
//  setTimeout(function(){
//   let error=false;
//   if (!error) {
//     resolve({
//         userName:"Bruce" ,age:31,
//          Profession:"Batman" 
//     })
//   } else {
//     reject('Error:Something went wrong')
//   }
//  },2000)

// })

// promiseFour
// .then((user)=>{
// console.log(user);
// return user.userName
// })
// .then((userName)=>{
//     console.log(userName);
   
// })
// .catch((error)=>{
//     console.log(error);
    
// }).finally(()=>{console.log("The promise is either resolved or rejected");
// })

// const promiseFive=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     let error=true;
//       if (!error) {
//          resolve({
//              userName:"JavaScript",
//               password:123
//          })
//        } else {
//          reject('Error:Something went wrong')
//        }
//       },2000)
    
//      })


// async function consumePromiseFive(){
//    try {
//     const response=await promiseFive
//     console.log(response); 
//    } catch (error) {
//     console.log(error); 
//    }
// }

// consumePromiseFive()
/**async function getAllUser(){
 try {
  const response= await fetch("https://api.github.com/users/SahilPatel010") 
const Data=response.json()
  console.log(Data);
 
 } catch (error) {
console.log("E:",error);
 }
getAllUser()**/


fetch("https://api.github.com/users/SahilPatel010")
.then(function(response){
  return response.json()
})
.then(function(data){
console.log(data);
})
.catch((error)=>{console.log(error);
})