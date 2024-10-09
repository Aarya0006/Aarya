// "use strict";


// let $= 12;
// let_=22/7;
// const PI=3.14;




// let a=12;
// let b=22/7;
// let c="hello";
// let d=[1,2,3,4]
// let e={
//     name: "Aarya",
//     id: 12,
// }
// let f= true

// let x="12"/"6";
// let y="12"+"6";


// let bol=true;
// let str= String(bol);
// console.log(str.charAt(1));
// console.log(typeof(str));

// const PI = 3.14;
// $ = 12;
// _ = 22/7;


// let str="abh";
// let num=Number(str);
// console.log(num);

// let str="true";
// let num=Boolean(str);
// console.log(num);/

// let str="true";
// let num=Boolean(5);
// let num1=Boolean(-15);
// console.log(num1);
// console.log(num);

// function display(){
//     let x=confirm("Are you sure")
//     alert(x+"User click")
// }

// function display(){
//     let x=prompt("Enter your name", "Aarya");
//     alert(x)
//  }



// console.log($);
// console.log(_);
// console.log(typeof(a));
// console.log(typeof(b));
// console.log(typeof(c));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(f));
// console.log(x);
// console.log(y);




// let a="12";
// let b=12.0;
// console.log(a===b);


//Validation of username nd password
function Validate()
{
    let Login=document.getElementById("login").value;
    let Pass=document.getElementById("pass").value;
    let p1=document.getElementById("result");
    if(Login=="admin" && Pass=="admin")
    {
        p1.innerText="Login Successfull";
    }
    else
    {
        p1.innerText="Login Failed";
    }
}