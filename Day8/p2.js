function task(message,delay){
    return new Promise((resolve)=> {
        setTimeout(() => {
            console.log(message);
            resolve();
        },delay);
    });
}
task("First Task Complete", 1000)
    .then(()=> task("Second Task Complete", 2000))
    .then(()=> task("Third Task Complete", 3000))
    .then(()=> task("Fourth Task Complete", 4000))