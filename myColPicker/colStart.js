/*        ...... get started....*/

// toggle menu
function toggleMenu(){
let x = document.getElementById('listContainer');
const bar = document.querySelector('.toggleMenu');
if(x.className === 'listContainer'){
x.className += ' responsive';
bar.innerHTML = `<a href="colStart.html" class="remDiv">x</a>`;
}
else{
x.className === 'listContainer';
}
}


var display = document.getElementById("displayText");
var main = document.querySelector("main");

function show1(){
main.style.background ="linear-gradient(to bottom right,red,orange) ";
display.innerText = "background:linear-gradient(to bottom right,red,orange) ;";
}
function show2(){
main.style.background ="linear-gradient(to top,yellow,orange,red,brown,black)  ";
display.innerText = "background:linear-gradient(to top,yellow,orange,red,brown,black) ; ";
}
function show3(){
main.style.background ="radial-gradient(green,blue,indigo,black)  ";
display.innerText = "background:radial-gradient(green,blue,indigo,black) ; ";
}
function show4(){
main.style.background ="radial-gradient(yellow,blue,white)  ";
display.innerText = "background:radial-gradient(yellow,blue,white) ; ";
}
function show5(){
main.style.background ="linear-gradient(to left ,red,purple,blue)  ";
display.innerText = "background:linear-gradient(to left,red,purple,blue) ; ";
}
function show6(){
main.style.background ="linear-gradient(to top,yellow,pink)  ";
display.innerText = "background:linear-gradient(to top,yellow,pink) ; ";
}
function show7(){
main.style.background ="linear-gradient(to bottom,purple,orange,green,white,black,red,blue,yellow)  ";
display.innerText = "background:linear-gradient(to bottom,purple,orange,green,black,white,red,blue,yellow) ; ";
}
function show8(){
main.style.background ="linear-gradient(to bottom,tan,black)  ";
display.innerText = "background:linear-gradient(to bottom,tan,black) ; ";
}
function show9(){
main.style.background ="linear-gradient(to top ,brown,red,brown)  ";
display.innerText = "background:linear-gradient(to top ,brown,red,brown) ; ";
}
function show10(){
main.style.background ="radial-gradient(white,yellow,white,yellow)  ";
display.innerText = "background:radial-gradient(white,yellow,white,yellow) ; ";
}
function show11(){
main.style.background ="conic-gradient(green,yellow,green)  ";
display.innerText = "background:conic-gradient(green,yellow,green) ; ";
}
function show12(){
main.style.background ="linear-gradient(60deg,blue,white)  ";
display.innerText = "background:linear-gradient(60deg,blue,white) ; ";
}