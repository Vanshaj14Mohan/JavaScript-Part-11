// let url = "https://catfact.ninja/fact";
// fetch(url) //By default this function returns a promise, so this means we can use our then & catch method here
// .then((res)=>{
//     console.log(res);
//     //console.log(res.json()); //would give data in a readable format
//     res.json().then((data)=>{
//         console.log(data.fact);
//     });
// })
// .catch((err)=>{
//     console.log("Error", err);
// });

// //or we could write it in a better way
let url = "https://catfact.ninja/fact";
fetch(url) //By default this function returns a promise, so this means we can use our then & catch method here
.then((res)=>{
    // console.log(res);
    return res.json();
})
.then((data)=>{
    console.log("Data", data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{//we did a chaining here
    console.log("Data2", data2.fact);
})
.catch((err)=>{
    console.log("Error", err);
});

//And all these API Calls are basically asynchronous here.

