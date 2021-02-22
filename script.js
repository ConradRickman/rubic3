var header = document.getElementById("title");

header.setAttribute("align", "center");
header.setAttribute("style", "color: darkblue;");

var name = prompt("Please enter your name");
    if (name != "") {
        document.getElementById("title").innerHTML =
        "Hello " + name + ", Welcome!";}
    else{
        document.getElementById("title").innerHTML =
        "Hello and Welcome!";}

var line = document.getElementById("description");

line.setAttribute("align", "center");
line.setAttribute("style", "font-weight: bold;");


var things = document.getElementById("things");
things.setAttribute("align", "center");
things.setAttribute("style", "display: inline;");


var list = document.getElementsByTagName("li");

var next = document.getElementById("next");
var newPara = document.createElement("h3");
var number = document.createTextNode("Here are my " + list.length + " favorite things:");

newPara.setAttribute("align", "center")

next.appendChild(newPara);
newPara.appendChild(number);


var albumSpace = document.getElementById("albums");
var albumList = document.getElementsByTagName("a");
var title2 = document.createElement("h3");
var section2 = document.createTextNode("Here are my " + albumList.length + " favorite albums:");

albumSpace.appendChild(title2);
title2.appendChild(section2);

albumSpace.setAttribute("align", "center");

var links = document.getElementById("links");
links.setAttribute("align", "center");
links.setAttribute("style", "font-weight: bold;")

function guessColor(){
    var color = prompt("What's my favorite color: Red, Blue, Green, Yellow, Purple, or Orange?");

    switch (color.toLowerCase()) {
        case "red":
        case "green":
        case "yellow":
        case "purple":
        case "orange":
            alert ("Nope, my favorite color is blue!");
        break;
    
    
        case "blue":
            alert ("That's right, it's blue!");
        break;
        
        default:
            alert ("That wasn't one of the colors!")
    }
}


document.write('<h1 style="text-align: center; color: darkblue">Thanks for visiting!</h1>')

console.log("I see you looking in here!")