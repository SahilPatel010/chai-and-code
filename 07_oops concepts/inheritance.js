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
}

console.log(new teacher());
