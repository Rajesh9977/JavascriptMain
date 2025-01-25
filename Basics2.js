// So this is basics part 2 where we will learn about Array, objects, Function etc.

//class 14 Array--------------------->

// const myArr = [0,1,2,3,4,5]
// 
// myArr.push(2)
// myArr.pop()
// myArr.shift()  //from front value will go

/*
console.log(myArr)
console.log(myArr.includes(5));
console.log(myArr.indexOf(3));
const newArr = myArr.join()  //the moment you do join it get convert into string.
console.log(myArr);
console.log(newArr);
*/

//Slice, Splice
/*
console.log("A", myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log(myArr)

const myn2 = myArr.splice(1,3);
console.log(myn2);
console.log(myArr)
 */

//Class 15 Array2--------------------------------------->
/*
const marvel  =["Ironman", "Wanda","spiderman"]
const DC = ["superman", "Batman"]

const allheros = [...marvel, ...DC]
console.log(allheros)

*/

//Class 16 Objects-------------------------------------->

// singleton

// object literals
/*
const obj1 = {
    name: "Rajesh",
    Age:25,
    location: "jabalpur",
    Email:"Rajesh@gmail.com"
}

console.log(obj1);
console.log(obj1.name);

obj1.Email = "Rajesh@chatgpt.com"

console.log(obj1)
*/
/*
const obj2 = new Object()

obj2.id = "123"
obj2.name = "Raj"
console.log(obj2)

const obj3 = {
    email: "rajesh@gmail.com",
    fullname:{
        name: "raj",
        surname:"rao"

    }
}

console.log(obj3.fullname.name)


// const obj4 = Object.assign(obj2, obj3)
// console.log(obj4)

const obj4 = {...obj2, ...obj3}
console.log(obj4)   // most of time we will be using spread operator only.
*/

/*
const course = {
    coursename : "JS",
    Instructor : "Hitesh",
    Price: "9999",
    lang: "Hindi+English"

}

const {coursename,Instructor,Price,Lang} = course  //this is what we call destructure

// console.log(course.coursename);

console.log(coursename);
console.log(Instructor);
console.log(Price);
console.log(Lang);

*/

//Class 19 Function ---------------------------------------->

/*
function addtwoNumber(Num1, Num2){
    console.log(Num1 + Num2);

}

addtwoNumber(3,4);
addtwoNumber(5,8);
addtwoNumber(10,87)

function Name(Username){
    if(!Username){
        console.log("please enter username");
        return

    }
    return `${Username} how are you`

}

console.log(Name("Rajesh"));
console.log(Name())

function calculate(...num1){
    return num1
}

console.log(calculate(200,300,400));

const user = {
    username:"Rajesh",
    phone: "9144997700",
    Email: "Raj@gmail.com"
}

function contact(obj1){
    console.log(`My contact name is ${obj1.username} and his phone number is ${obj1.phone}`);
    
}

contact(user);

you know you can call any obj in function like this.

*/


// Class 21 Global and local scope------------------------------>


/*

if (true){
    let a = 10;
    const b = 20;
    var c = 30
    
}

// console.log(a);
// console.log(b);
console.log(c);

*/


// Class 23 This and arrow function-------------------------------->

// This----------------->

/*const addtwo = (num1, num2) =>{
    return num1+num2
}

console.log(addtwo(1,2))
*/


//Class 26 Control flow-------------------->

if(true){
    console.log("hello");
    

}

const temp = 41;

if(temp<50){
    console.log("temp is less than 50");
    
}
else{
    console.log("temp is more than 50");
    
}

const loggedinfromEmail = true;
const loogedinFromGoogle = true;
if(loogedinFromGoogle && loggedinfromEmail){
    console.log("user logged in");
    
}