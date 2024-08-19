for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element==5) {
      //  console.log("5 is the best number"); 
    }
   // console.log(element);  
}

for (let i = 1; i <=10; i++) {
   // console.log(`outer value is ${i}`);
    
for (let j = 1; j <=10; j++) { 
   // console.log(`inner loop value ${j} and inner value is ${i}`);
   //  console.log(i+'*'+j+'='+i*j);
     
}
}

let heroes=["batman","Superman","Flash"];
//console.log(heroes.length);

for (let index = 0; index < heroes.length; index++) {
    const element = heroes[index];
    //console.log(element);
    
    
}
for (let i = 0; i <=20; i++) {
    const element = i;
    if (element==5) {
        console.log("No 5 detected");
        continue
    }

    console.log(`Value of i is ${i}`);
    
    
}