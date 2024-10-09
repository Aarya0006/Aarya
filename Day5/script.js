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
function validate()
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

// Abhishek's JS Code
// "use strict";
// let a=12;
// const PI = 3.14;
// let $ = 12;
// let _ = 22/7;

// console.log($);
// console.log(_);

// checking Type---

// let na = "Hello";
// let d = [1,2,3,4];
// let e = {
//     name: 'Abhi',
//     roll : 23
// };
// let bool = true;
// console.log(typeof(a));
// console.log(typeof(PI));
// console.log(typeof(na));
// console.log(typeof(d));
// console.log(typeof(e));
// console.log(typeof(bool));


 //Type Conversion
// let x = "12"/"6";
// console.log(x);
// let bol = true;
// let str = String(bol);
// console.log(str);
// console.log(str.charAt(1));
// console.log(typeof(str));

// let str1 = "true";
// let b = Boolean(str1);
// console.log(b);

// let b1 = Boolean(3);
// console.log(b1);

// Function---
// function display(){
//     confirm method---

//     let x1= confirm("Are you Sure");
//     alert("User Click "+x1);

//     Prompt Method--
//     let x1 = prompt("Enter your Name: ","Abhishek Singh");
//     alert(x1);
// }
// checking a===b ----

// let a1="34";
// let a2=34.0;
// console.log(a1===a2);

// Function of validation ------------
// function validate(){
//     let user = document.getElementById("username").value;
//     let password = document.getElementById("user_password").value;
//     let user_result = document.getElementById("result");
//     if(user=="admin" && password=="admin"){
//         user_result.innerText="Login Success";
//     }
//     else{
//         user_result.innerText="Login Failed";
//     }
// }