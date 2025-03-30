//async and await keyword
//async keyword is used to declare a function as asynchronous.It is used to define a function that can be paused create an async function
//and by default all these async function return a promise

async function greet(){ //it will return a promise even if we don't return anything as it is a async function
    //abc.abc(); //it will give error
    //throw "404 page not found" //used throw keyword to throw an error
    return "Hello"; //returning a value from a async function will return a promise
}

greet()
.then((result)=>{
    console.log("Promised was resolved");
    console.log("Result was: ", result);
})
.catch((err)=>{
    console.log("Promise was rejected with error: ", err);
});

//We can even make our arrow functions async too
let hello = async ()=>{
    return 7;
}

//hello(), in console and it would give us promise fulfilled with promise result is 7