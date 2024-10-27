// array

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);


// myArr.unshift(9)   //isse agge array ke agge se value add  hota hai.
// myArr.shift()         //isse agge se value delete hota hai.

// console.log(myArr.includes(9));  // yeh check karta hai ki value hai ki nhi.
// console.log(myArr.indexOf(3));    //yeh check karrta hai kii index par kaya hai.

const newArr =myArr.join()          //issse aaray ka type string me change ho jjata hai.

// console.log(myArr);
// console.log( typeofnewArr);   

//slice ,splice

console.log("A",myArr);

const myn1 = myArr.slice(1,3)   //slice se ek index se dusre index tak array ko print karte hai excluding last that we give ..

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)   //splice se last index ko include karke print karta hai or origninal array ko manipulate bhi karta hai..
console.log("c",myArr)
console.log(myn2);






