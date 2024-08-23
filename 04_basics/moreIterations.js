const arr=[1,2,3,4,5,6,7,8,9,10];

for (const num of arr) {
   // console.log(`the value of arr is ${num}`);
}

const spelling='Hello';

for (const spell of spelling) {
    //console.log(`letters in words are ${spell}`);
    
}

const map=new Map();

map.set('IN',"India");
map.set('UAE',"United Arab Emirates");
map.set('USA',"United States of America");

//console.log(map);

for (const [key,value] of map) {
   // console.log(key,':-',value);
    
}
const myObj={
    js:"Javascript",
    cpp:"c++",
    JS:"Javascript"
}

for (const key in myObj) {
    console.log(`${key} is the shortcut for ${myObj[key]}`);
    
}
