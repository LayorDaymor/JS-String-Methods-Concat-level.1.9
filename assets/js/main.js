
var text1 = "Sam is going to codingschool";
var text2 = "Tom";
var text3 = "programming bike";
var text4 = "and" ;



/* Concat and replace */
console.log(text1.replace("codingschool", "school"));

let text11=text1.replace("codingschool", "school");

console.log(text11.concat(" and to the movie theater"))

let text12=text11.concat(" and to the movie theater")
/* -- */

/* replace */
console.log(text1.replace("codingschool", "movie theater"));
let text13=text1.replace("codingschool", "movie theater");
/* -- */

/* Concat */
console.log(text2.concat(" and Sam are going to school"))
let text14 =text2.concat(" and Sam are going to school");
console.log(text2.concat(" and Sam are going to gym and to the movie theater"))
let text15 =text2.concat(" and Sam are going to gym and to the movie theater");
console.log(text2.concat(" is going to school and to the movie theater"));
let text16 =text2.concat(" is going to school and to the movie theater");



document.write("<h1>"+text12+"</h1>"+"</br>");
document.write("<h1>"+text13+"</h1>"+"</br>");
document.write("<h1>"+text14+"</h1>"+"</br>");
document.write("<h1>"+text15+"</h1>"+"</br>");
document.write("<h1>"+text16+"</h1>"+"</br>");