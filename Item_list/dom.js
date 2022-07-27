//EXAMINE THE DOCUMENT OBJECT //

// Task-3 //

/*console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);

console.log(document.all[10]);
document.all[10].textContent = "Hello";

console.log(document.forms);
console.log(document.links);
console.log(document.images);
*/

//GET ELEMENT BY ID//
//console.log(document.getElementById("header-title"));
// var headerTitle = document.getElementById("header-title");
// var header = document.getElementById("main-header");

//console.log(headerTitle);
//headerTitle.textContent = "Hello";
//headerTitle.innerText = "Goodbye";
//console.log(headerTitle.textContent);
//console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";

// header.style.borderBottom = "solid 3px #000";
// title.style.fontWeight = "bold";
// title.style.color = "green";

// Task-4 //

//GETELEMENTBYCLASSNAME //
/*
var item = document.getElementsByClassName("list-group-item");
console.log(item);
console.log(item[1]);
item[1].textContent = "Hello 2";
item[1].style.fontWeight = "bold";
item[1].style.backgroundColor = "yellow";

//Gives error
//item.style.backgroundColor = "#f4f4f4";

for (var i = 0; i < item.length; i++) {
  item[1].style.backgroundColor = "#f4f4f4";
  item[2].style.backgroundColor = "green";
}
main.style.fontWeight = "bold";

*/

// Task - 5 //
/*
//GETELEMENTBYTAGNAME //
var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "Hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor = "yellow";

for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#f4f4f4";
}
 */

// Task - 6 //

// QUERYSELECTOR //
var header = document.querySelector("#main-header");
header.getElementsByClassName.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "Hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var lastItem = document.querySelector(".list-group-item:last-child");
console.log("lastItem is", lastItem);
lastItem.style.color = "blue";

var secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.backgroundColor = "green";

var thirdItem = document.querySelector(".list-group-item:nth-child(3)");
thirdItem.style.visibility = "hidden";

//QUERYSELECTORALL//

var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = "Hello";

var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");

for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "green";
  even[i].style.backgroundColor = "#ccc";
}
