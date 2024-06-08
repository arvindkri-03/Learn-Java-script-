// Dates & Time

 let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toString());
// console.log(currDate.toLocaleTimeString());
// console.log(currDate.toISOString());
// console.log(currDate.getTimezoneOffset());
// console.log(typeof currDate);

// let myCreatedDate= new Date("2022-02-15" );
let myCreatedDate= new Date("10-08-2003");
console.log(myCreatedDate.toLocaleDateString());
console.log(myCreatedDate.toLocaleString());



let myTimeStamps = Date.now()
// console.log(myTimeStamps);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());


newDate.toLocaleString('default')
{
    weekday="long"
    
}