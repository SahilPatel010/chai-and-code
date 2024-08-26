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

for (const key in map) {
// console.log(`${map[key]}`); it is wrong method
    
   // console.log(key,':-',value);
    
}
const myObj={
    js:"Javascript",
    cpp:"c++",
    JS:"Javascript"
}

for (const key in myObj) {
  //  console.log(`${key} is the shortcut for ${myObj[key]}`);
    
}

const programming=['java','ruby','c++','javascript','python']

for (const key in programming) {
//console.log(`the value of keys are ${programming[key]} `);
    
}

const coding=['java','ruby','c++','javascript','python'];

//coding.forEach(function (val){
//console.log(`the value of coding is ${val}`);

//});

//coding.forEach((items)=>{
  //  console.log(items);
    
//} )

/**function printMe(items,index,arr) {
    console.log(items,index,arr);
}

coding.forEach(printMe)**/

const myCoding=[
    { 
        languageName:"Java",
        languageFile:".java"
    },
    {
        languageName:"JavaScript",
        languageFile:"js"
    },
    {
        languageName:"cpp",
        languageFile:".cpp"
    }
]

myCoding.forEach((items) => {
//console.log(items.languageFile);
    
});
const nums=[1,2,3,4,5,6,7,8,9,10]

// const values= nums.filter((Num)=>{
//   return  Num>4
// })
// console.log(values);
const newNums=[]
nums.forEach((num) => {
    if (num>4) {
        newNums.push(num)
    }
});
//console.log(newNums);
const books=[
   {
        title:"one",genre:'fiction',published:2000,
        edition:2007
    },
   {
        title:"two",genre:'Non-fiction',published:2001,
        edition:2010
    },
   {
        title:"three",genre:'History',published:2002,
        edition:2011
    },
   {
        title:"four",genre:'Thriller',published:2003,
        edition:2012
    },
   {
        title:"five",genre:'History',published:2004,
        edition:2013
    }
]

 let UseWork=books.filter((bk)=>bk.genre==='History')
  UseWork=books.filter((bk)=>{
 return   bk.edition>=2010
})

console.log(UseWork);
