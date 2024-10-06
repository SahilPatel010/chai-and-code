class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get email(){
        return `${this._email.toUpperCase()}KBC`
    }

    set email(value){
          this._email=value
    }
    get password(){
        return `${this._password}Bruce`
    }

    set password(value){
         this._password=value
    }
}

const Hitesh=new user("h@gmail.com","abc")

console.log(Hitesh.password);
console.log(Hitesh.email);
