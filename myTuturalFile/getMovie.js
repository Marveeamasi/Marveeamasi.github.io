//JAVASCRIPT CODE SELF WRITTEN BY MARVEE AMASI FOR TUTURIAL PURPOSE ,FEEL FREE TO USE


//SIDEBAR TOGGLE FUNCTION to make it toggle when we click the menu bar
function toggle(){
  //choose the element you want to toggle its class name and store it in a constant.
const sideBar = document.querySelector(".sideBar");
//then perform toggle magic
let x = sideBar.classList;
x.toggle("show");
}


//TOGGLE THE MOVIE CONTENT to create a pop up showing the movie info and download button
function tog(){
  //select element we need to toggle its class name
 document.querySelector(".movieArticle").classList.toggle("show");
}
//CHANGE THE BUTTON TEXT
const btn = document.querySelector(".movieArticle button a");
var z ;
z = false;

function btnText(){
if(z == true){
btn.innerText = "Please wait...";
}
else{
btn.innerText = "Download";
}
}
function btnLogic(){
z = true;
}



//FUNCTION TO TOGGLE LIGHT MODE AND DARK MODE
var y;
y = false;

function mode(){
const body = document.querySelector("body");
const li = document.querySelector(".mode");
body.classList.toggle("light");
if(y == false){
li.innerText = "darken";
}
else{li.innerText = "lighten";}
}
function moodLogic(){
 y = !y; 
}



//RESPONSIVE FORM

const layer = document.querySelector(".submitText p");
const w = document.querySelector(".submitText");
const submitBtn = document.getElementById("submitBtn");

function handleSubmit(){
var message = document.getElementById("message").value;
var phone = document.getElementById("phone").value;
var name = document.getElementById("name").value;
if(name && message &&  phone){
layer.innerText="Thank you so much "+name+" for your co-operation";
}else if(!name || !message || !phone){
layer.innerText="Leave no blank input, fill'em all";
}else{
layer.innerText="seems you messed up big time"
}

}
function onOff(){
w.classList.add("show");

var t= setInterval(()=>{
w.classList.remove("show");
},3000);

return t;

clearInterval(t);

}



//TO VIEW VIDEO ............
var p = document.querySelector(".movieArticle p");
var link = document.querySelector(".movieArticle button a");

function horI(){
p.innerHTML="Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer's previous victims. And they are dead set on making sure that what happened to them doesn't happen to Finney.<hr><b>Release Date:</b> Jun 24, 2022 (United States) <hr><b>Stars:</b> Mason Thames, Madeleine McGraw, Ethan Hawke, Jeremy Davies";
link.href="https://www.sabishare.com/file/lXhYUbUVj52-the-black-phone-2022-netnaija-com-mp4";
}

function horII(){
p.innerHTML="Four friends get together for a nostalgic evening of fun and games after a decade of absence, which takes a dark turn.<hr><b>Release Date:</b> Jun 23, 2022 (United States)<hr><b>Stars:</b> Jim Mahoney, Emmy Raver-Lampman, Jon Bass, Sarunas J. Jackson, Shelley Hennigimg";
link.href="https://www.sabishare.com/file/caobmpxBR40-gatlopp-2022-netnaija-com-mp4";
}

function horIII(){
p.innerHTML="In the aftermath of a personal tragedy, Harper retreats alone to the beautiful English countryside, hoping to find a place to heal. But someone - or something - from the surrounding woods appears to be stalking her, and what begins as simmering dread becomes a fully-formed nightmare, inhabited by her darkest memories and fears.<hr><b>Release Date: </b>May 20, 2022 (United Kingdom)<hr><b>Stars: </b>Jessie Buckley, Rory Kinnear, Paapa Essiedu, Gayle Rankin";
link.href="https://www.sabishare.com/file/vmRCoaFKP59-men-2022-netnaija-com-mp4";
}

function actI(){
p.innerHTML="Two years after the murder of his son and father, a retired hitman sets in motion a carefully crafted revenge plan against the killer: his own brother.<hr><b>Release Date:</b> Jun 4, 2021<hr><b>Stars: </b>Óscar Jaenada, Sergio Peris-Mencheta, Óscar Casas";
link.href="https://www.sabishare.com/file/UsXBcbhlV93-xtremo-2021-netnaija-com-mp4";
}

function actII(){
p.innerHTML="Single father and former Marine Kyle Snowden is struggling to adjust to life with PTSD. On a routine stop for his job in Child Protective Services, Kyle finds himself and a group of innocent customers trapped inside his stepfather's store during a hostile take-over by militant maniac Eagan Raize. Disturbing details emerge about Eagan's violent vendetta against Kyle's stepfather, Congressman Sam Nelson, threatening the lives of everyone inside, including the Congressman and Kyle's young daughter. In a race against time, Kyle must battle against the terrorists as well as his personal demons to secure the store and save everyone.<hr><b>Release Date: </b>Jun 11, 2021<hr><b>Stars: </b>John Malkovich Holly Taylor Michael Jai White";
link.href="https://www.sabishare.com/file/YhmokxfBG83-rogue-hostage-2021-netnaija-com-mp4";
}

function actIII(){
p.innerHTML="Successful architect Jeremy Angust is approached on his trip to the Tokyo International Airport by a chatty girl called Texel Textor. She is a strange young woman who seems to be looking for captive victims whom she forces to listen to her strange stories. Jeremy loses the flight because of Texel and once they are installed in the lounge area, he will not be able to get rid of the annoying stranger. Although the meeting seems fortuitous, soon there be a turn that will transform the character of that encounter into something much more sinister and criminal.<hr><b>Release Date: </b>Jun 11, 2021<hr><b>Stars: </b>Dominique Pinon, Tomasz Kot, Marta Nieto";
link.href="https://www.sabishare.com/file/FBtFmOtzP92-a-perfect-enemy-2021-netnaija-com-mp4";
}

function comI(){
p.innerHTML="Zed and Addison are beginning their final year at Seabrook High in the town that's become a safe haven for monsters and humans alike. Zed is anticipating an athletic scholarship that will make him the first Zombie to attend college, while Addison is gearing up for Seabrook's first international cheer-off competition. Then suddenly, extraterrestrial beings appear around Seabrook, provoking something other than friendly competition.<hr><b>Release Date: </b>Jul 15, 2022 (United States)<hr><b>Stars: </b>Meg Donnelly, Milo Manheim, Matt Cornett, Terry Hu";
link.href="https://www.sabishare.com/file/jwwZDCgYl43-z-o-m-b-i-e-s-3-2022-netnaija-com-mp4";
}

function comII(){
p.innerHTML="A small-time magician with zero interest in football must lead his local team to the finals of a tournament if he wishes to marry the love of his life.<hr><b>Release Date: </b>Jul 15, 2022 (India)<hr><b>Stars: </b>Jitendra Kumar, Arushi Sharma, Javed Jaffrey";
link.href="https://www.sabishare.com/file/eTeUKjTDd85-love-goals-2022-netnaija-com-mp4";
}

function comIII(){
p.innerHTML="A single father and his reluctant teenage daughter embark on an unforgettable cross country road trip, discovering new levels of their love for each other and the unexpected twists and turns life has in store.<hr><b>Release Date:</b> Jul 15, 2022 (United States)<hr><b>Stars:</b> John Cho, Mia Isaac, Kaya Scodelario, Mitchell Hope";
link.href="https://www.sabishare.com/file/LxzlMIySz80-dont-make-me-go-2022-netnaija-com-mp4";
}