//async and await keyword
//async keyword is used to declare a function as asynchronous.It is used to define a function that can be paused create an async function
//and by default all these async function return a promise

async function greet(){ //it will return a promise even if we don't return anything as it is a async function
    //abc.abc(); //it will give error
    throw "Error found" //used throw keyword to throw an error
    return "Hello"; //returns a promise
}

greet()
.then(()=>{
    console.log("Promised was resolved");
})
.catch(()=>{
    console.log("Promise was rejected with error", error);
});