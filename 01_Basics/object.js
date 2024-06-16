// singleton
// object create

//Object literals
const mysym =Symbol("key1")
const Jsuser ={
    name: "Arvind",
    age: 18,
    course:"BCA",
    location:"Buxar",
    email:"arvindkr03@gmail.com",
    [mysym]:"keyvalue1"
}

// console.log(Jsuser.name);
// console.log(Jsuser.email);


 

console.log(Jsuser[mysym]);
console.log(Jsuser[mysym]);

Jsuser.email ="cosoftech03@gmail.com"
// object.freeze(Jsuser)
console.log(Jsuser);

Jsuser.greetings="Welldone!"
console.log(jsuser.greetings);