function multiplyBy5(num) {
    this.num=num
    return num*5;
}

// multiplyBy5.power=9
// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);
function createUser(username,score){
    this.username=username
    this.score=score
}


createUser.prototype.increment=function(){
    this.score++
}


createUser.prototype.printMe=function(){
    console.log(`price is ${this.score}`);
}


const chai=new createUser("chai",10)
const tea=new createUser("tea",50)

tea.printMe()