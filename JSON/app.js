//Accessing JSON data
jsonRes = '{"fact":"Cats are North America\u2019s most popular pets: there are 73 million cats compared to 63 million dogs. Over 30% of households in North America own a cat.","length":149}'
console.log(jsonRes);

//Methods to access JSON Data
//1-> JSON.parse -> To parse a string data into a JS Object
valRes = JSON.parse(jsonRes);
console.log(valRes.fact);

//2-> JSON.stringify -> To parse a JS Object data into JSON.
let student = {
    name: "John",
    marks: 95,
    age: 22
};

console.log(student);

//now converting it,
res = JSON.stringify(student);
console.log("JSON data format", res);