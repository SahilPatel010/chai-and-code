const Numbers=[1,2,3];

// const newV=Numbers.reduce((acc,currVal)=>{
//     console.log(`acc is ${acc} and currVal is ${currVal}`);
    
//     return acc+currVal;
// },2)
const newV=Numbers.reduce((acc,currVal)=>acc+currVal,2)

//console.log(newV);
const purchaseCart=[
    {   
        itemName:'Watch',
        Price:100,
    },
    {   
        itemName:'Caps',
        Price:100,
    },
    {   
        itemName:'WaterBottle',
        Price:100,
    },
]
const Total=purchaseCart.reduce((acc,items)=>acc+items.Price,0)

console.log(Total);
