//Question1:What are different data types available in javaScript?
//Primitive data type:
//1.Number
//2.String
//3.Boolean
//4.undefined
//5.null
//Non primitive data type:
//1.Objects
//2.Arrays

//Question2:How many ways to define the variables.
//variable:var
//variable:let
//variable:const

//Question3:Difference between var,let and const?
//Var:It is global scoped.
//It can be redeclared.
//Var can be modified later.

//Let:It is block scoped.
//It can't be redeclared.
//let can be modified later.

//const:It is block scoped.
//It can't be redeclared.
//let can't be modified later.


//Question4:what is hoisting?
//In javascript,hoisiting means,a variable or function can be used before declaration.
//Only var supports hoisting.
//let and const doesn't supports hoisting.
//Note:Declaration part is hoisted only not initialization.

// a = 10 ;
// console.log(a);//10
// var a;

// var a;
// console.log(a);//undefined.
// a = 10;

//Question5:What is temporal dead zone?
//It is the area of block where a variable is inaccessible until the computer initializes it with a value.
//TDZ occurs when we declare a variable a let and const keyword.

function add(){
    console.log(a);//undefined
    console.log(b);//Reference error.
    var a = 10;
    let b = 20;

}
add();

// console.log(a);//This comes under TDZ.
// var a = 12;


//Question6:Differece between '==' and '==='?
// == only checks the value .
// === checks the both value and the data type.
//e.g
let a = 10;
var c = '10';
console.log(a == b);//True
console.log(a===b);//False


//Question7:Types of operators in javascript?
//1.Arithmetic operator.
//2.Comparison operator.
//3.Bitwise operator.
//4.Consitional operator.
//5.Logical operators.
//6.comma operator.
//Increment,decrement operator.