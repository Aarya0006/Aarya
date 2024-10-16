// let num=[1,2,3,4,45,5,45];
// // let newnum=num.map(x=>x*2);
// // console.log(newnum);

// // let evennum=num.filter(x=>x%2==0);
// // console.log(evennum);

// // let sum=num.reduce((x,y)=>x+y,0);
// // console.log(sum);

// // let product=num.reduce((x,y)=>x*y,1);
// // console.log(product)

// const students = [
//     { name: "Aarya", score: 80 },
//     { name: "Aryan", score: 90 },
//     { name: "Abhishek", score: 50 },
//     { name: "Aditya", score: 70},
//     { name: "Aakash", score: 60},
// ];
// let scores=students.map(x=>x.score);
// console.log(scores);  

// let sum=scores.reduce((x,y)=>x+y,0);
// console.log(sum)

// // let sum1=students.map(x=>x.score).reduce((x,y)=>x+y,0);
// // console.log(sum1);

// // let sum1=students.map(x=>x.score+10).filter(x=>x>60).reduce((x,y)=>x+y,0);
// // console.log(sum1);

// let sum1=students.filter(x=>x.score>60).map(x=>x.score+10).reduce((x,y)=>x+y,0);
// console.log(sum1);


// let num=[12,3,3,4,4,4,4,4,98];
// num.forEach((x)=>console.log(x*3));


// sayhello=()=>{
//     console.log("i am in hello function");
// };
// console.log("start");
// setTimeout(sayhello, 3000);
// console.log("end");
// setTimeout(sayhello, 6000);

console.log("start");
setTimeout(()=>{
    console.log("First task completed");
    setTimeout(()=> {
        console.log("Second task completed");
        setTimeout(()=>{
            console.log("Third task completed");
        },3000);
    },2000);
},1000);
console.log("End");