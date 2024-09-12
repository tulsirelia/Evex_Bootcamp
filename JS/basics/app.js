// let student = "tulsi";
// student = "satyam";

// let name;

// let num = 3.678;
// console.log(typeof(num));

let value = true;
value = Number(value);

console.log(value);
console.log(typeof value);

value = String(value);
console.log(typeof value);
// console.log(typeof(value));

console.log("2+2");
console.log(2+2);

// +
// -
// *
// /
// %
// 2**3
let a = 12;
a++;
++a;
a--;
let name1 = "tulsi";
let name2 = "satyam"

console.log(name1+name2);

let array = ['mango', 'apple', 'orange'];
console.log(array[2]);
console.log(array.pop());
console.log(array);
array.push('orange');
console.log(array);

// function hello(){
//     console.log("hello world!");
// }

// hello();

let student1 = {
    name: 'tulsi',
    age: 19,
    hello: function(){
        console.log("hello");
    },
}

console.log(student1.hello);

console.log(Math);

console.log(Math.ceil(2.44));

let h1 = document.querySelector('h1');
console.dir(h1);
h1.style.color='red';


console.log(Math.floor(Math.random()*10));



let name_2 = "tulsi";
let age = 19;

console.log(`my name is ${name_2} and age is ${age}`);

let button = document.querySelector('button');
let button_1 = document.querySelector('#btns');
let button_2 = document.querySelector('.btn');
let button_4 = document.querySelectorAll('button');

let button_3= document.getElementById('btns');


// function sum(a, b){
//     return a+b;
// }

//arrow functions

// let sum = (a, b) => {return a+b};

// let variable = ()=>{}

console.log("1");
setTimeout(()=>{
    console.log("this executed after 2 seconds")
}, 2000);
console.log("2");



