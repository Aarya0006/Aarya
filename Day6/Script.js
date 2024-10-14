// let a=()=>{
//     console.log("Arrow Function");
// };
// a();
 
// let b=()=>console.log("Arrow funtion 2");
// b();

// let c=(x,y)=>{
//     return x+y;
// }
// let res=c('Rahul','Ravi');
// let res1=c(12,32);
// console.log(res,res1);


// function display()
// {
//     // let p1=document.querySelector("p");
//     let p1=document.querySelectorAll("p");
//     p1[0].innerHTML="I am in parra";
//     p1[0].style.backgroundColor="red";
//     p1[1].innerHTML="I am 2nd parra";
//     p1[1].style.backgroundColor="green";
// }
 

// let changeheader=()=>{
//     let head1=document.querySelector("h1");
//     head1.textContent="Change the title"
//     let a1=document.querySelector("a")
//     a1.setAttribute("href", "https://aktu.ac.in");
//     a1.innerHTML="AKTU Website";
// };


let addcontent=()=>{
    const newDiv=document.createElement('div');
    newDiv.textContent='This is new div';

    const body=document.querySelector('body');
    body.appendChild(newDiv);
}



