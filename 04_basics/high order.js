const nums=[1,2,3,4,5,6,7,8,9,10]
 const newNums= nums
 .map((num)=>num*10)
 .map((num)=>num+2)
 .filter((num)=>num>45)

 console.log(newNums);
 