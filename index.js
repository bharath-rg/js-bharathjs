// string methods //
let a ='hello';
// return length of the string//
//output: 5//
let b= 'world';
let res = a.concat(b);
console.log(res)
// return length of the string//
//output:helloworld
let n = a.endsWith("hello");
console.log(n)
// return length of the string//
//output:true
let n = a.indexOf("hello");
console.log(n)
// return length of the string//
//output:0
let n = b.includes("world");
console.log(n)
// return length of the string//
//output:true
let n = b.lastIndexOf("world");
console.log(n)
// return length of the string//
//output:0
let a= "hello";
a.repeat(2);
console.log(a.repeat(2))
// return length of the string//
//output:hello
let c= a.replace("hello", "java");
console.log(c)
// return length of the string//
//output:java
let c = "java";
let c = c.search("java");
console.log(c)
// return length of the string//
//output:0
let a= "Hello";
let res = a.slice(0, 5);
// return length of the string//
//output:hello
console.log(res)
let a = "Hello";
var res = a.split(" ");
console.log(res)
// return length of the string//
//output:"How", "are", "you", "doing", "today?"]

let a = "Hello world, welcome to the universe.";
let a = a.startsWith("Hello");
console.log(a)
// return length of the string//
//output:true
let a = "Hello world!";
let res = a.substr(1, 4);
console.log(res)
// return length of the string//
//output:ello
let a= "Hello world!";
let res = a.substring(1, 4);
console.log(a)
// return length of the string//
//output:hello world
let a = "Hello World!";
let res = a.toLocaleLowerCase();
console.log(res)

//--------------------------------------------------------------//
//number methods//

let x = 123;
x.toString();          
(123).toString();        
(100 + 23).toString();
console.log(x)
// return of the number system//
//output:123

var x = 9.656;
x.toExponential(2);    
x.toExponential(4);    
x.toExponential(6);   
console.log(x) 
// return of the number system//
//output:9.656

var x = 9.656;
x.toFixed(0);         
x.toFixed(2);        
x.toFixed(4);          
x.toFixed(6);
console.log(x)
// return of the number system// p
//output:9.656

//----------global methods------------------------//

//console.warn(2)
// warn//
 //console.error('error')
 //error//

 //console.table(["Audi", "Volvo", "Ford"]);
 //table//
 
 //alert("Hello! I am an alert box!!");
 //alert//

// confirm("Press a button!");
 //button//
//var person = prompt("Please enter your name", "Harry Potter");

//if (person != null) {
//document.getElementById("demo").innerHTML =
///"Hello " + person + "! How are you today?";
//}
//prompt//

Boolean(10 > 9)
console.log(Boolean)


var a = parseInt("10") + "<br>";
var b = parseInt("10.00") + "<br>";
var c = parseInt("10.33") + "<br>";
var d = parseInt("34 45 66") + "<br>";
var e = parseInt(" 60 ") + "<br>";
var f = parseInt("40 years") + "<br>";
var g = parseInt("He was 40") + "<br>";

var h = parseInt("10", 10)+ "<br>";
var i = parseInt("010")+ "<br>";
var j = parseInt("10", 8)+ "<br>";
var k = parseInt("0x10")+ "<br>";
var l = parseInt("10", 16)+ "<br>";

var n = a + b + c + d + e + f + g + "<br>" + h + i + j + k +l;
console.log(n
)

//parseint//

var a = parseFloat("10")
var b = parseFloat("10.00")
var c = parseFloat("10.33")
var d = parseFloat("34 45 66")
var e = parseFloat(" 60 ")
var f = parseFloat("40 years")
var g = parseFloat("He was 40")
console.log('a')
//parsefloat//

isNaN(123) //false
isNaN(-1.23) //false
isNaN(5-2) //false
isNaN(0) //false
isNaN('123') //false
isNaN('Hello') //true
isNaN('2005/12/12') //true
isNaN('') //false
isNaN(true) //false
isNaN(undefined) //true
isNaN('NaN') //true
isNaN(NaN) //true
isNaN(0 / 0) //true
console.log('123')
//isnan//

var x1 = Boolean(0);
var x2 = Boolean(1);
var x3 = new Date();
var x4 = "12345";
var x5 = 12345;

var res =
String(x1) + "<br>" +
String(x2) + "<br>" +
String(x3) + "<br>" +
String(x4) + "<br>" +
String(x5);
console.log(res)
//string//









