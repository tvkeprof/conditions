// console.log("hello from conditions");

// if age < 18 => console.log ('under age')
// is age = 21 or age > 21 => console.log ('can drink alcohol')
// if age > 60 => console.loh ('undur nstan')

// const age = 10;
// if (age < 18) {
//   console.log("under age");
// } else if (age == 21 || age > 21) {
//   console.log("can drink alcohol");
// } else {
//   console.log("nothing works");
// }

// Exercise 1
// <h3>Write a  which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>

// const number = prompt("enter a number");

// if (number % 3 == 0) {
//   console.log("Fizz");
// } else if (number % 5 == 0) {
//   console.log("Buzz");
// } else if (number % 3 == 0 || number % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (number % 3 != 0 || number % 5 != 0) {
//   console.log("error");
// } else {
//     console.log("nothing works");
// }

// Exercise 2

// Write a JavaScript conditional statement to find the largest of five numbers.
// check input numbers are the type of number, if not console.log('Invalid inputs

// Sample numbers : -5, -2, -6, 0, -1
// Output : 0

// const a = -5
// const b = -2
// const c = -6
// const d = 0
// const e = -1

// if (a>b && a>c && a>d && a>e) {
//     console.log(a);
// } else if (b>a && b>c && b>d && b>e) {
//     console.log(b);
// } else if (c>a && c>b && c>d && c>e) {
//     console.log(c);
// } else if (d>a && d>b && d>c && d>e) {
//     console.log(d);
// } else{
//     console.log(e);
// }

// Exercise 3

// Write a JavaScript program that accept two integers and display the larger.

// check input numbers are the type of number, if not console.log('Invalid inputs)

// Sample numbers : 2,5
// Output : 5

// let number1 = 2.5;
// let number2 = 5;

// let largestNumber = Math.max(number1, number2);
// console.log("The largest number is: " + largestNumber);

// Exercise 4

// Write a JavaScript conditional statement to find the sign of product of three numbers.
// Display an console.log box with the specified sign.

// Sample numbers : 3, -7, 2
// Output : The sign is -

// let numb1 = 3;
// let numb2 = -7;
// let numb3 = 2

// if(numb1>0 && numb2>0 && numb3>0) {
//     console.log("the sign is +")
// } else if (numb1<0 && numb2<0 && numb3<0) {
//     console.log ("the sign is -")
// } else if (numb1>0 && numb2<0 && numb3<0) {
//     console.log ("the sign is +")
// } else if (numb1<0 && numb2>0 && numb3<0) {
//     console.log("the sign is +");
// } else {
//     console.log ("the sign is -")
// }

// Exercise 5

// Choose the correct comparison operator to console.log true, when x is greater than y.
// Choose the correct comparison operator to console.log false, when x is equal to y.
// Choose the correct comparison operator to console.log not sure, when x is NOT equal to y.

// let x = 1
// let y = 2
// if (x<y) {
//     console.log ("true")
// } else if (x==y) {
//     console.log ("false")
// } else {
//     console.log("not")
// }

// Exercise 6

// The Grade Assigner
// - Write a if/else statement that:
//   - takes 1 variable, a number score.
//   - returns a grade for the score, either "A", "B", "C", "D", or "F".
// - Call that if/else statement for a few different scores and log the result to make sure it works.

// let score = 99
// if (score>90 && score<100) {
//     console.log ("A")
// }

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

// let price =100000

// if (price>5000 && price<30000) {
//     let niitprice = price * 3/20 + price
//     console.log(niitprice)
// } else if (price<=300000) {
//     let niitprice = price * 4/20 + price
//     console.log(niitprice);
// }

// Exercise 8 j

// Write if statement that takes role and return each role with greeting

//     if role is 'Employee' return 'Hello'
//     if role is 'Director' return 'Greetings'
//     if role is '' return 'Please provide role'
//     else return 'Hi'

// let role = "dsdsds"
// if (role === "employee") {
//     console.log("Hello");
// } else if (role === "director") {
//     console.log("Greetings");
// } else if (role === "return"){
//     console.log("please provide role");
// } else {
//     console.log("Hi");
// }

// Exercise 10 j
// Write If statement that takes string
//     if string length is more than 10 print the string  has more than 10 characters
//      if string length is more than 5 return the string has more than 5 characters
// //       if string length is less than 1 return the string has nothing
// //       if string length is equal to 1 return the string has 1 character

// // let string = ""
// // if (string.length >= 10) {
// //     console.log("more than 10");
// // } else if (string.length >= 5) {
// //     console.log("more than 5");
// // } else if ( string.length < 1) {
// //     console.log("nothing");
// // } else if (string.length == 1) {
// //     console.log("1");
// // } else {
// //     console.log("error");
// // }

// // 1. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
//      let i = 4 > 3; true
//      let iii = 4 < 3; false
//      let ii = 4 >= 3;  true
//      let iv = 4 <= 3;  false
//      let v = 4 == 4;  true
//      let vi = 4 === 4; true
//      let vii = 4 != 4;  false
//      let iix = 4 !== 4; false
//      let ix = 4 != "4";  false
//      let x = 4 == "4"; true
//      let xi = 4 === "4"; false
// console.log(i, iii, ii, iv, v, vi, vii, iix, ix, x, xi);

// // 2. Эхлээд console.log() ашиглахгүйгээр дараах харьцуулалтын илэрхийллийн үр дүнг тодорхойл. Үр дүнгээ шийдсэний дараа console.log() ашиглан баталгаажуулна уу.
// //      let one = 4 > 3 && 10 < 12;
// //      let two = 4 > 3 && 10 > 12;
// //      let three = 4 > 3 || 10 < 12;
// //      let four = 4 > 3 || 10 > 12;
// //      let five = !(4 > 3);
// //      let six = !(4 < 3);
// //      let eight = !(4 > 3 && 10 < 12);
// //      let nine = !(4 > 3 && 10 > 12);
// //      let ten = !(4 === "4");

// // 1. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
// // Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.
// let highjil = 2024

// if ((highjil%4 == 0 && highjil%100 != 0) || highjil%400 == 0){
//     console.log("undur jil");
// } else {
//     console.log("undur jil bish");
// }

// // 3. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
// //      1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
// //      2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
// //          a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
// //          b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
// //          c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
// //          d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
// //          e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
// //      3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр
// //          НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.

// let dun = 57
// const namell = "bat-erdene"
// if(dun<59){
//     console.log(namell , "F" , dun);
// } else if (dun >= 60 && dun <69){
//     console.log("D");
// } else if ( dun >= 70 && dun <79) {
//     console.log("C");
// } else if (dun >=80 && dun <89) {
//     console.log(("B"));
// } else if (dun >=90 && dun <100) {
//     console.log("A");
// }

// // 4. Өгөгдсөн 2 тооны ихийг олох функц бич.

// let ih=Math.max(10, 20)
// console.log(ih);

// 5. Гараас утасны дугаар ( 99001234 ) аван шалгах, зөв дугаар бол харгалзах операторыг (Unitel, Mobicom, G-Mobile, Skytel) хэвлэх , буруу дугаар бол буруу гэсэн мессежийг өгөх

// let dugaar = prompt ("oruul")
// let hhhhda = dugaar.substring(0,2)
// if(hhhhda == 99){
//     console.log( "mobicom");
// } else if (hhhhda == 88) {
//     console.log("unitel");
// }

// 6. Тэгш өнцөгт гурвалжны 2 суурын урт өгөгдсөн(a, b) бол тухайн гурвалжины налуугын уртыг( c ) ол


// 7. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.:
//      a=85 b=75 c=96 d=69
//      80-аас их тоонуудын нийлбэрийг: 181
// let toonuud = [85,75,96,69]
// let sum=0
// for ( i=0; i<toonuud.length; i++ ) {
//     if(toonuud[i]>80) {
//         sum=sum+toonuud[i]
//     }
//     console.log(sum)
// }
// const aa = Number(prompt("a"));
// const bb = Number(prompt("a"));
// const cc = Number(prompt("a"));
// const dd = Number(prompt("a"));
// let sum = 0;
// if (aa > 80) {
//   sum = sum + aa;
//   if (bb > 80) {
//     sum = sum + bb;
//     if (cc > 80) {
//       sum = sum + cc;
//       if (dd > 80) {
//         sum = sum + dd;
//         console.log(sum);
//       } else {
//         console.log(sum);
//       }
//     }
//   } else {
//     if (cc > 80) {
//       if (dd > 80) {
//         console.log(avah);
//       }
//     }
//   }
// }

// 8. 4 н хувьсагч зарлан тоон утга өг.Өгөгдсөн 4 тооны 5-аас бага тоонуудын үржвэрийг ол. 5-аас бага тоо ядаж 1 байгаа:
//      a=3 b=7 c=2 d=4
//      5-аас бага тоонуудын үржвэр: 24


// let n1 = 3;
// let n2 = 7;
// let n3 = 2;
// let n4 = 4; 

// if (n1 < 5) {
// } else if (n2 < 5) {
// } else if (n3 < 5) {
// } else if (n4 < 5) {
// } console.log("numbers less than 5",n1*n3*n4);


// 9. if … else ашиглан myAge болон yourAge-ийн утгыг харьцуул. 
// Харьцуулалт дээр үндэслэн үр дүнг консол руу хөгшин (би эсвэл та) гэж тэмдэглэнэ үү. Насыг оруулахын тулд prompt("Насаа оруулна уу:")-г ашиглана уу.

// const myAge=prompt ("Насаа оруулна уу:")
// const yourAge=prompt ("Насаа оруулна уу:")
// if (myAge>yourAge){
//   console.log("би");
// } else if (myAge<yourAge){
//   console.log("та");
// } else {
//   console.log("chi");
// }

// 10. Тухайн өгөгдсөн хувьсагчдаас хамгийн бага утгатай хувьсагчийг console дээр хэвлэнэ үү
//      жишээ нь: Input: 120, 33, 10, 12 output: 10

// let baga=Math.min(120, 33, 10, 12)
// console.log(baga);


// 11. Өгөгдсөн эерэг тоо нь 3-ын үржвэр эсвэл 7-ын үржвэр эсэхийг шалгана уу

// let too= prompt("too")

  // if(too%3 == 0 || too%7 == 0){
  //   console.log(too, "good");
  // } else {
  //   console.log("baddab");
  // }
  

// 12. n тооны утгын дагуу эерэг эсвэл сөрөгийг олж хэвлэнэ.
//      negative
//      positive



// 13. weight, height гэсэн 2 хувьсагчид утга оруулахад тухайн хэмжээнээс хамааран биеийн жингийн индексийг тооцож тухайн индекс-д харгалзах утгыг хэвлэнэ.
//      Жингийн дутагдалтай
//      Эрүүл
//      Илүүдэл жинтэй
//      Хэт таргаллалттай

let weight = prompt ("enter weight")

if(weight<50 || weight<59){
  console.log("Жингийн дутагдалтай");
} else if (weight < 60 || weight <80) {
  console.log("Эрүүл");
}

// 14. Өгөгдсөн тооны тэгш эсвэл сондгой болохыг хэвлэж харуулна уу

// 15. Нас тооцоолох бодлого: yearOfBirth гэсэн хувьсагчид гараас төрсөн онийг ав. Тухайн оноос тухайн хүний насыг нь бодож гаргаад үр дүнгээ old гэсэн хувьсагчид оноо. Насанд нь харгалзах утгыг хэвлэ.
//      0 <= old <= 1 үед "Infant"
//      1 < old <= 3 үед "Toddler"
//      3 < old <= 5 үед "Preschool"
//      5 < old <=12 үед "Gradeschooler"
//      12 <old <= 18 үед "Teen"
//      18 < old <=21 үед "Youngadult"
