class user{
    constructor(userName){
        this.userName=userName
    }

    log(){
        return `Username is ${this.userName}`
    }
}

class teacher extends user{
    constructor(userName,email,password){
        super(userName)
        this.email=email
        this.password=password
    }
    addcourse(){
        console.log(`the new course was added by ${this.userName}`);
        
    }
}
const chai=new teacher("chai","tea@gmail.com",12345)
console.log(chai.addcourse());

const masalachai=new user("tea","masala@gmail.com",54321)

console.log(masalachai.log());
console.log(chai.log());

console.log(chai instanceof user);
