//singleton  //jab constructor se object banega tho single banega
//object.create

//object literals   // isme single nhi banega

const mySym = Symbol("key1")

const Jsuser = {
    name: "Hitesh",
    "full name" : "Hitesh Choudhary",
    [mySym] : "mykey1",
    age: 18,
    location: "jaipur",
    email: "hiesh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays","Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser["email"])
// console.log(Jsuser[mySym])


Jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(Jsuser)             // isse value freez ho jata hai fir change nhi hota hai.
Jsuser.email = "hitesh@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo= function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

  