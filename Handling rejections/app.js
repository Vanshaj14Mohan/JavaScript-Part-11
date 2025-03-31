//Await keyword pauses the execution of it;s surrounding async function until the promise is settled (resolved or rejected).
function getNum(){
    return new Promise((resolve, reject) => {
       setTimeout(()=>{
        let num = Math.floor(Math.random() * 10)+ 1;
        console.log(num);
        resolve();
       }, 1000);
    });
}

async function demo(){
    await getNum();
    await getNum();
    getNum();
}

//Fixing the callback hell code from previous session here.
h2 = document.querySelector("h2");

function changeColor(color, delay){ //nextColChange is basically a callback here.
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            let num = Math.floor(Math.random() * 5)+ 1;
            if (num > 3){
                reject("Promise rejected");
            }
            h2.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve("Color Changed");
        }, delay);
    });
}

//Now how to handle rejections with await as if one of our promises gets rejected. 
async function color(){
    try{
    await changeColor("red", 1000);
    await changeColor("purple", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    await changeColor("orange", 1000);
    } catch(err){
        console.log("Error Caught")
        console.log(err);
    } //so now using try-catch it won't effect the rest of the code, it will execute it also.
    let a = 5;
    console.log(a);
    console.log("New number = ", a);
}

color();