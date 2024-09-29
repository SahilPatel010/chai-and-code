// object literals

const user={
    userName:"Sahil",
    age:29,
    getuserDetails:function(){
       // console.log(`UserName:${this.userName}`);
       // console.log(this);
        
    //  console.log("user details accessed");
    }
}

// console.log(user.userName);
//console.log(user.getuserDetails());



function User(userName,LoginCount,isLoggedin) {
    this.userName=userName
    this.LoginCount=LoginCount
    this.isLoggedin=isLoggedin

    this.greeting=function(){
        console.log(`Welcome ${this.userName}`);
        
    }

    return this
}
 const see=new User("Sahil",4,true) //constructor function
 const see2=new User("Bruce",5,false)

 console.log(see.constructor);
 //console.log(see2);
 