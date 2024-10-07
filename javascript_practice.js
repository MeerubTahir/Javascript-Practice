// Topic: var concept

// Redeclaration of variable in var is possible

// var a;
// a = 10;
// console.log(a)
//  a =5;
//  console.log(a); 

//======================================================================================

// Declaration of a variable inside a function and try accessing outside the function 
// var num;
// function declaration()
// {
//    // var num;  Here i am trying to access the variable outside the function and it will not work because the scope of var is local to the function

//     num = 25;   // Here var is a variable that is declared inside a function
// }

// declaration();
// console.log(num);     

//=====================================================================================

// var concept inside a for loop

// for(var i = 1; i<= 5; i++)
// {
//     console.log(i);
// }

// console.log(i);   

// // this code will first print the loop counter 5 times and after the loop is terminated it will print the very next of loop's counter variable when i will access the variable outside the loop

//======================================================================================

// // Topic : let 

// // Declaration of a variable inside a block and try accessing it oustide the block

// var age = 18;


// if(age==18)
// {
//     let num = 3;
// }

// console.log(num);

// // This will not work because let is defined inside a block and it is local to that block only so it is not accessible oustide that block.
// // On the the other hand if i will define it outside the block then it will be accessible everywhere

//=======================================================================================

// variable declared with let cannot be redeclared in the same scope but can be reassigned

// function declaration()
// {
//     let a ;
//     a = 3;
//     // let a = 7;  --Error we cannot redeclare a variable with let but we can reassign it e.g: 
//     a = 5;
// }

//==========================================================================================

// // log a counter variable inside a loop and trying loggign it outside the loop. What will happen??

// for(let i = 1; i<=5; i++)
// {
//     console.log(i);
// }

// console.log(i);

// // This will result in reference error because the variable declared with let is accessible to the nearest set of braces.

//============================================================================================

// // Topic: const

// // Trying to reassign a value to a variable declared with const

// const pi = 3.145;
// pi = 4.34; 
// console.log(pi);

// // This will return a type error because variable declared with const cannot be reassigned a value 

//=========================================================================================

// Create a const object with some properties. Modify one of its properties and then observe the behaiour

// const person = { firstname: "Meerub", lastname: "Tahir", age: 22, address: "Lahore"}

// console.log ("My name is " + person.firstname + " " + person.lastname + ". I am " + person.age + " years old" + ". I live in " + person.address);

// person.age = 23;

// console.log ("My name is " + person.firstname + " " + person.lastname + ". I am " + person.age + " years old" + ". I live in " + person.address);

// // object declared with constant means that the reference of the object is constant not the content of the object. So we can change the content of the object but cannot reassign object with new properties.

//===========================================================================================

// // Topic: Loop

// // Write a for loop that print number from 1 to 10

// for(var i = 1; i<=10; i++)
// {
//     console.log(i);

// }  

//==========================================================================================

// // Given an array fruits = ['apple','banana','cherry']. Use for of loop to log the each fruit to the console

// let fruits = ['apple', 'banana', 'cherry'];

// for(element in fruits)
// {
//     console.log(fruits[element]);
// }

//==========================================================================================

// // Given an object. Use for in loop to log key and value of object

// let person = {Name:'Alice', Age:24}

// for(element in person)
// {
//     console.log( element + ":" + person[element]);
// }

//==========================================================================================

// // Topic : Array and its function

// // Create an array and then create a new array with map function by multiplying every element with and print both arrays

// var arr1 = [2,4,6,8,10];

// var arr2 = arr1.map(element => element*2);

// console.log(arr1);
// console.log(arr2); 

//=========================================================================================

// // Given an array , use the filter function to filter out only even numbers from array 

// var arr3 = [2,3,5,6,7,8,10,11,13,16,18,19,21,22,23,24];

// console.log(arr3.filter(element=>element%2==0));

//=======================================================================================

// // Given an array.use reduce method to find the sum of all elements in an array

// var arr4= [1,3,3,4,5]

// console.log(arr4.reduce((acc,element) => acc+element,0));

//=====================================================================================

// Topic : Callbacks

// function func(name,callback)

// {
//     if(callback)
//     {
//     callback(name)
//     }
// }

// function callback(name)
// {
//     console.log(`Hello ${name}`);
// }

// func("Meerub",callback)


//======================================================================

//// use of callback to handle asynchronous operator

// function func(age,callback)
// {
   
   
//     setTimeout(() => {
//         if(callback)
//             callback(age);
//     },5000);
// }

// function callback(age)
// {
//     console.log(`I am ${age} years old`);
// }

// function aftercallback()
// {
//     console.log("wait please - Thank you...");
// }

// func(24,callback)
// aftercallback();

//========================================================================================

// Topic : Promises

// let p1 = new Promise((resolve, reject) => {
//     setInterval(() => {
//         resolve()
//     }, 4000);

    
// })

// p1.then(
//     function(value)
//     {
//         console.log("This promise is resolved after 4 seconds");
//     },

//     function(error)
//     {
//         console.log("This promise is rejected")
//     }
// );

//=================================================================================================

// // Now i am trying to catch errors using promises

// let p2 = new Promise((resolve, reject) => {
    
//     var age = 10;

//     if(age>18)
//     {
//        resolve();   
//     }

//     else{
//         reject()
//     }

// })

// p2.catch(()=>{
//     console.log("sorry you are not allowed for this ride");
// });

//====================================================================

// // Handling multiple promises

// let p1 = new Promise((resolve, reject) => {
//     resolve("Subhan");
// })

// let p2 = new Promise((resolve, reject) => {
//     reject("Ahmad");
// })
// let p3 = new Promise((resolve, reject) => {
//     resolve("Ali");
// })

// Promise.all( [p1,p2,p3]).then
//     (
//     function(values)
//     {
//         values.forEach(value => {
//             console.log(`${value} your promise is resolved`);
//         });
        
//     }

    

// )

// .catch((error)=>{
//     console.log("Promise is rejected of: " + error)
// }
// );

// ===========================================================================

// // Topic : aync/await

// async function greet()
// {
//    return "Hello Ahmad" ; 

// }

// greet().then(
//     function(value)
//     {
//         console.log(value);
//     }
// );

//=========================================================

// async function multiplePromises()
// {
//     let p1 = new Promise((resolve, reject) => {

//         setTimeout(()=>resolve("promise 1 ia resolved"),2000);
         
//     });

//     let p2 = new Promise((resolve, reject) => {

//         setTimeout(()=>resolve("promise 2 ia resolved"),4000);
         
//     });


// const results = await Promise.all([p1, p2]);
//         console.log("All promises resolved:");
//         results.forEach(result => console.log(result));
// }

// multiplePromises();

//==========================================================

// // Topic: Function

// var multiplicationResult = function product(a,b)
// {
//     return a * b;
// }


// console.log(multiplicationResult(12,8));

//====================================================

// console.log(sum(4,6));

// function sum(num1,num2)
// {
//     return num1 + num2;
// }

//====================================================================================

// // When a function is called first and declared later it still works because javascript allows hoisting concept


// const printsum = (a,b) => {
//     return a + b;
// }

// console.log(printsum(12,89));

//============================================================================================

// Topic: Loops and if else 

// // Use While Loop to print odd numbers from 1 to 20

// var i = 1;
// while(i<=20)
// {
//     if(i%2!=0)
//     {
//         console.log(i);
//     }
//     i++
// }

//=============================================================================================
/* <html>

<html>

</html>
<body>
    <script>

        let input = "";
        while(input.tolowercase() !== "exit")
        {
        prompt("How old are you",20)
        }
    </script>
</body>

</html> */

//===========================================================================












