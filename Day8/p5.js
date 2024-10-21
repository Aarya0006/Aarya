async function orderFood(name,time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name + " Prepared")
        }, time);
    });
    
}

async function resturent() {
    console.log("Task Started");
    const pizza =await orderFood("pizza", 1000);
    console.log(pizza);
    const burger =await orderFood("Burger", 2000);
    console.log(burger);
}

resturent();