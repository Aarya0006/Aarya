function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const students = [
                { name: "Aarya", score: 80 },
                { name: "Aryan", score: 90 },
                { name: "Abhishek", score: 50 },
                { name: "Aditya", score: 70},
                { name: "Aakash", score: 60},
            ];
            // let sum1=students.map(x=>x.score).reduce((x,y)=>x+y,0);        
            resolve(students); //to get data as it is
            // resolve(sum1); to get the sum only
        }, 4000);
    });

}
// fetchdata()
//      .then(data => console.log(data))
//      .catch((error)=>{
//         console.log(error);
//      });


fetchdata()
     .then((data)=>{
        let sum=0;
        data.forEach((student)=>{
            sum+=student.score;
     });
     console.log(sum);
     })
     .catch((error)=>{
        console.log(error);
     });
