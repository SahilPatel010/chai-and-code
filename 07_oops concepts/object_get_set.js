const user={
    _email:"bruce@gmail.com",
    _password:'bat',

    get email(){
    return this._email.toUpperCase()
    },

    set email(value){
     this.email=value
    }
}

const tea=Object.create(user)
console.log(tea.email);
