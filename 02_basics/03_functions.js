// function addTwoN(no1,no2) {
//     let result=no1+no2;
//     console.log("Javascript");    

//    return result;
// }   

// const result=addTwoN(10,50);
//  console.log(result);


function loginUserMsg(name) {
    if (!name){
        console.log("plz enter ur name:");
        let urname=prompt("plz enter ur name:");
         return `${urname} just logged in`;
    }else{
    return `${name} just logged in`;
    }
}
console.log(loginUserMsg());
// console.log(loginUserMsg(""));
// console.log(loginUserMsg());

