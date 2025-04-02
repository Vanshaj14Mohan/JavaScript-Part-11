//Using fetch with async/await

let url = "https://catfact.ninja/fact";

//We can also write this whole code in try and catch block tho only to deal with error.
async function getCatFact(){
    try{
    let res = await fetch(url);
    let data = await res.json(); //It's also an asynchronous function it also returns a promise.
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json(); //It's also an asynchronous function it also returns a promise.
    console.log(data2.fact);
    }
    catch(err){
        console.log("Error: ", err);
    }
}

getCatFact();