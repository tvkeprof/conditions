console.log("hello from conditions");

// if age < 18 => console.log ('under age')
// is age = 21 or age > 21 => console.log ('can drink alcohol')
// if age > 60 => console.loh ('undur nstan')

const age = 10;
if (age < 18) {
  console.log("under age");
} else if (age == 21 || age > 21) {
  console.log("can drink alcohol");
} else {
  console.log("nothing works");
}

// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

const number = prompt("enter a number");

if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else if (number % 3 == 0 || number % 5 == 0) {
  console.log("FizzBuzz");
} else if (number % 3 != 0 || number % 5 != 0) {
  console.log("error");
} else {
    console.log("nothing works");
}

// Exercise 2
 
// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs
 
// Sample numbers : -5, -2, -6, 0, -1
// Output : 0


const a = -5
const b = -2
const c = -6
const d = 0
const e = -1

if (a>b && a>c && a>d && a>e) {
    console.log(a);
} else if (b>a && b>c && b>d && b>e) {
    console.log(b);
} else if (c>a && c>b && c>d && c>e) {
    console.log(c);
} else if (d>a && d>b && d>c && d>e) {
    console.log(d);
} else{
    console.log(e);
}

// Exercise 3
 
// Write a JavaScript program that accept two integers and display the larger.
 
// check input numbers are the type of number, if not console.log('Invalid inputs)
 
// Sample numbers : 2,5
// Output : 5

let number1 = 2.5;
let number2 = 5;

let largestNumber = Math.max(number1, number2);
console.log("The largest number is: " + largestNumber);

// Exercise 4
 
// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.
 
// Sample numbers : 3, -7, 2
// Output : The sign is -

let numb1 = 3;
let numb2 = -7;
let numb3 = 2

if(numb1>0 && numb2>0 && numb3>0) {
    console.log("the sign is +")
} else if (numb1<0 && numb2<0 && numb3<0) {
    console.log ("the sign is -")
} else if (numb1>0 && numb2<0 && numb3<0) {
    console.log ("the sign is +")
} else if (numb1<0 && numb2>0 && numb3<0) {
    console.log("the sign is +");
} else {
    console.log ("the sign is -")
}

// Exercise 5
 
// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.

let x = 1
let y = 2
if (x<y) {
    console.log ("true")
} else if (x==y) {
    console.log ("false")
} else {
    console.log("not")
}

// Exercise 6
 
// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.

let score = 99
if (score>90 && score<100) {
    console.log ("A")
}

// Exercise 7 j
 
//  3) Write conditional expressions to satisfy the following safety rules:
 
//  a) If crewStatus is true, print "Crew Ready" else print "Crew Not Ready".
 
//  b) If computerStatusCode is 200, print "Please stand by. Computer is rebooting." Else if computerStatusCode is 400, print "Success! Computer online." Else print "ALERT: Computer offline!"
 
//  c) If shuttleSpeed is > 17,500, print "ALERT: Escape velocity reached!" Else if shuttleSpeed is < 8000, print "ALERT: Cannot maintain orbit!" Else print "Stable speed".
 
// Write If statement that takes number checks if the number is odd or even
 
//     if odd return "the number is odd"
//     if even return "the number is even"



// Exercise 8 j
 
// 0. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг,
// бусад үед 20% - ийг нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу.
// Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮, 27500₮, 100000₮.

let price = (15000, 15)

if (price>5000 && price<30000) {
    // let niitprice = price * 3/20 + price
} 



