// // CHAPTER:01
// // TOPIC:-ALERT,PROMPT,CONSOLE

// alert("Error! Please enter your valid passward");

// // line break alert
// alert("Welcome to js land...🚀  \n  \n  Happy coding❤️");

// // prompt
// var pro=prompt("Are you interest");
 
// // console
// var name=prompt("Enter your name?");
// console.log(name);
  

//  Completed chapter 1\

// CHAPTER:2 
// TOPIC:-VARIBLE FOR STRING
// var name=prompt("Enter you Full name");
// alert (name);

// alert("Hello World!");

// CHAPTER:3
// TOPIC:VARIABLE FOR NUMBER

//  let a=2;
//  let b=4;
 
//  console.log(a+b);
//  console.log(a-b);
//  console.log(a*b); 
//  console.log(a/b); 
//  console.log(a%b); 
//  console.log(++a,b++);
//   console.log(a++,++b);

//   alert("I am 17  year old");
   
//   var birth=prompt("Enter you birth year?  ");
//   document.write(birth);

//   chapter:4
// topic:variablename :legal or illgal
//  Question:(1):Declare 3 statement in one statement
//  let naam = "Alina", age = 17, city = "Karachi";
  
//  Question:(2):-Declare 5 legal or 5 illegal?
// 5 legal variable
// let name = "Ali";
// let age1 = 17;
// let _city = "Karachi";
// let $price = 100;
// let myName = "Sara";

// 5 ILLEGAL VARIABLE

// jslet 1age = 17;      // number se shuru nahi ho sakta
// let my name = "Ali"; // beech me space nahi aa sakta
// let my-name = "Ali"; // hyphen (-) nahi aa sakta
// let let = 10;        // reserved keyword use nahi kar sakte
// let @price = 100;    // @ jaisa symbol nahi aa sakta

// Question:(3):-
 
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("b) Variable names can only contain letters, numbers, $ and _ <br>");
// document.write("c) Variables must begin with a letter, $ or _ <br>");
// document.write("d) Variable names are case sensitive <br>");
// document.write("e) Variable names should not be JS keywords");

// CHAPTER:5
// TOPIC:-MATH EXPRESSION
// // question=1
// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;

// document.write("Sum of " + num1 + " and " + num2 + " is " + sum,"<br>");

// // question:2

// var a = 10;
// var b = 5;

// // Subtraction
// var sub = a - b;
// document.write("Subtraction of " , a ," and " , b , " is " , sub , "<br>");

// // Multiplication
// var mul = a * b;
// document.write("Multiplication of " , a , " and " , b , " is " , mul , "<br>");

// // Division
// var div = a / b;
// document.write("Division of " , a , " and " , b , " is " , div , "<br>");

// // Modulus
// var mod = a % b;
// document.write("Modulus of " , a , " and " , b , " is " , mod);

// Question:3
// a. Declare a variable
// var a;

// b. Show value
// document.write("Value after variable declaration is: " , a , "<br>");
//
// c. Initialize with a number
// a = 5;

// d. Show value
// document.write("Initial value: " , a , "<br>");

// e. Increment
// a++;

// f. Show value after increment
// document.write("Value after increment is: " + a + "<br>");

// g. Add 7
// a = a + 7;

// h. Show value after addition
// document.write("Value after addition is: " + a);
// i. Decrement the variable
// a--;

// j. Show value after decrement
// document.write("Value after decrement is: " + a + "<br>");

// k. Show remainder after dividing by 3
// document.write("The remainder is : " + a % 3);


// QUESTION:4
// var ticketPrice = 600;
// var totalCost = ticketPrice * 5;

// document.write("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");\



// QUESTION:05
// var num = 4;

// document.write("Table of " , num , "<br>");
// document.write(num , " x 1 = " , num*1 , "<br>");
// document.write(num , " x 2 = " , num*2 , "<br>");
// document.write(num , " x 3 = " , num*3 , "<br>");
// document.write(num , " x 4 = " , num*4 , "<br>");
// document.write(num , " x 5 = " , num*5 , "<br>");
// document.write(num , " x 6 = " , num*6 , "<br>");
// document.write(num , " x 7 = " , num*7 , "<br>");
// document.write(num , " x 8 = " , num*8 , "<br>");
// document.write(num , " x 9 = " , num*9 , "<br>");
// document.write(num , " x 10 = " , num*10);


// QUESTION:06
// Celsius to Fahrenheit
// var celsius = 25;
// var fahrenheit = (celsius * 9/5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F <br>");

// // Fahrenheit to Celsius
// var fahrenheit2 = 77;
// var celsius2 = (fahrenheit2 - 32) * 5/9;
// document.write(fahrenheit2 + "°F is " + celsius2 + "°C");


// question:07
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables:
var price1 = 650;
var price2 = 100;
var qty1 = 3;
var qty2 = 7;
var shipping = 100;

var total = (price1 * qty1) + (price2 * qty2) + shipping;

document.write("<h1>Shopping Cart</h1>");
document.write("Price of item 1 is " + price1 + "<br>");
document.write("Quantity of item 1 is " + qty1 + "<br>");
document.write("Price of item 2 is " + price2 + "<br>");
document.write("Quantity of item 2 is " + qty2 + "<br>");
document.write("Shipping charges " + shipping + "<br><br>");
document.write("Total cost of your order is " + total);
