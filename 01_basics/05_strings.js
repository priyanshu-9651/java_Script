const name ="priyanshu"
const repoCount = 50

// console.log(name + repoCount +" Value");  sahi hai outdated modern days me koi use nhi karta hai..

//new me use karnege backtik;

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);//new tarik hai string ko add karne ka and called string interpollation.

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);              //value pair acess karne ke liye.
console.log(gameName.__proto__);       //object ko access karne ke liye.


console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString =gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);


const newStringOne = " hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());     // string ke extra space ko remove karta hai.


const url = "http://hitesh.com/hitesh%20choudhary"

console.log(url.replace('20%','-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));


