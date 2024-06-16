const marvel_heros =["thor","Iron Man", "spiderman"]
const cricket_heros =["Sachin","Rohit", "Kohli"]
// marvel_heros.push(cricket_heros)
// const allHeros = marvel_heros.concat(cricket_heros)

// console.log(allHeros);
// console.log(marvel_heros[3]);

let allnew_Heros = [...cricket_heros, ...marvel_heros]
console.log(allnew_Heros);

let array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

let realArray=array.flat(4)

console.log(realArray);

console.log(Array.isArray("Suryavanshi"));
console.log(Array.from("Surya"));
console.log(Array.from({name: "Suryavanshi"}));

let marks_Math =85
let marks_CNI =83
let marks_Java =75

console.log(Array.of(marks_Math, marks_CNI,marks_Java));