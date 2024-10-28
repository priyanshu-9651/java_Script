//const tinderUser = new Oject()               ///yeh ek singleton obejct banega ...
const tinderUSer = {}


tinderUSer.id = "123abc"
tinderUSer.name = "sammy"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = object.assign({},obj1,,obj2,obj4)

const obj3 ={...obj1,...obj2}   //spread karke object ko combine kiya
// console.log(obj3);

const user = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
    },
    {
    }
]

user[1].email
// console.log(tinderUSer);


// console.log(Object.keys(tinderUSer));
// console.log(Object.values(tinderUSer));
// console.log(Object.entries(tinderUSer));

// console.log(tinderUSer.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"

}

//course.courseInstructor

const {courseInstructor: instructor} = course      //iss tarh se object ko destructure karte hai..

// console.log(courseInstructor);
console.log(instructor);

// {                                              // json object hai..
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


