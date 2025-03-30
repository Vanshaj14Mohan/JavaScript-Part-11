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

//Note: We can only use await keyword only in our async function. If we use it in a normal function, it will throw an error.

//Fixing the callback hell code from previous session here.
h2 = document.querySelector("h2");

function changeColor(color, delay){ //nextColChange is basically a callback here.
    return new Promise((resolve, reject)=>{
        setTimeout(() =>{
            h2.style.color = color;
            console.log(`Color changed to ${color}`);
            resolve("Color Changed");
        }, delay);
    });
}

async function color(){
    await changeColor("red", 1000);
    await changeColor("purple", 1000);
    await changeColor("blue", 1000);
    await changeColor("green", 1000);
    changeColor("orange", 1000);
}

color();