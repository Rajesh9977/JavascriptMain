// So this is basics part 2 where we will learn about Array, objects, Function etc.

//class 14 Array--------------------->

const myArr = [0,1,2,3,4,5]

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



