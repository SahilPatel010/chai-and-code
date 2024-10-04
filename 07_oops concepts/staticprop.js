class user{
    constructor(userName){
     this.userName=userName
    }
  static  logMe(){
        console.log(`the username is ${this.userName}`);
    }

    createId(){
        return `abc`
    }
}

const Hitesh=new user("hitesh")

//console.log(Hitesh.createId());

class teacher extends user{
    constructor(email){
        super(userName)
        this.email=email
    }
}

const burger=new user("macd","mac@gmail.com")

console.log(burger.createId());

