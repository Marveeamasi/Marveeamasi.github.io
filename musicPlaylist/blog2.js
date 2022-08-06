/*    ###    active menu    wonder why it aint responding###   

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .navCont ul li');
window.onscroll = () => {
  var current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id'); }
  });

  navLi.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(current)) {
      li.classList.add('active');
    }
  });
};

*/










/*#######    music    ##########      */


let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#songTitle');
let recentVol = document.querySelector('#volume');
let volShow = document.querySelector('#volumeShow');
let slider = document.querySelector('#durationSlider');
let showDuration = document.querySelector('#showDuration');
let trackImage = document.querySelector('#trackImg');
let autoPlay = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artistName');


let timer;
let autoplay = 0;

let indexNo = 0;
let playingSong = false;




/*create an audio element*/

let track = document.createElement('audio');





/* all song lists*/

let allSongs = [
{
  name: "Pressure",
  path: "PrinceEmmaPressure.mp3",
  img: "img.jpeg",
  singer: "Prince Emmanuel"
},
{
  name: "Vibes on vibes",
  path: "AyraVibes.mp3",
  img: "imgi.jpeg",
  singer: "Ayra"
},
{
  name: "Ginger",
  path: "BurnaBoyGinger.mp3",
  img: "imgii.jpeg",
  singer: "Burna boy ft wizkid"
},
{
  name: "Jaiye",
  path: "PsquareJaiye.mp3",
  img: "imgiii.jpeg",
  singer: "P-square"
}
];






/*functionssssss*/





/*to load the track    ....*/

function loadTrack(indexNo){
clearInterval(timer);
resetSlider();
track.src = allSongs[indexNo].path;
artist.innerHTML = allSongs[indexNo].singer;
trackImage.src = allSongs[indexNo].img;
title.innerHTML = allSongs[indexNo].name;
track.load();

total.innerHtml = allSongs.length;
present.innerHTML = indexNo + 1;
timer = setInterval(rangeSlider,1000);
}
loadTrack(indexNo);





/*function to mute sound*/
function muteSound(){
track.volume = 0;
volume.value = 0;
volShow.innerHTML = 0;
}





/*reset sound*/

function resetSlider(){
slider.value = 0;
}






/*......checking of the song is playing or not*/

function justPlaySong(){
if(playingSong==false){
playSong();
}
else{
pauseSong();
}
}





/*  ,,,play song,,,,*/
function playSong(){
track.play();
playingSong = true;
play.innerHTML = '<i class="fa fa-pause"></i>';
}




/*  ,,,pause song,,,,*/
function pauseSong(){
track.pause();
playingSong = false;
play.innerHTML = '<i class="fa fa-play"></i>';
}




/*,,,,next song,,,,,*/

function nextSong(){
if(indexNo < allSongs.length - 1){
indexNo+=1;
loadTrack(indexNo);
playSong();
}
else{
indexNo = 0;
loadTrack(indexNo);
playSong();
}
}

function previousSong(){
if(indexNo > 0){
indexNo-=1;
loadTrack(indexNo);
playSong();
}
else{
indexNo = allSongs.length;
loadTrack(indexNo);
playSong();
}
}




/*,,,,,,,,change volume,,,,,,,,*/

function volumeChange(){
volShow.innerHTML = recentVol.value;
track.volume = recentVol.value /100;
}




/*......change slider position....*/

function durationSlider(){
sliderPosition = track.duration * (slider.value /100);
track.currentTime = sliderPosition;
}





/*autoplay function*/

function autoPlaySwitch(){
if(autoplay == 1){
autoplay = 0;
autoPlay.style.background = 'rgba(255,255,255,.2)';
}
else{
autoplay = 1;
autoPlay.style.background = '#ff8a65';
}
}

function rangeSlider(){
let position = 0;




 /*update slider position*/
 
 if(!isNaN(track.duration)){
 position = track.currentTime * (100/ track.duration);
 slider.value = position;
 }
 
 
 
 
 
 /*function will run when the song is over*/
 
 if(track.ended){
 play.innerHTML = ' <i class="fa fa-play"></i> ';
  if(autoplay == 1){
  indexNo +=1;
  loadTrack(indexNo);
  playSong();
  }
 }
}






/*#########toggle classlist###*/
const fo = document.querySelector('.form')
let area = document.querySelector('#area');
fo.addEventListener('submit',function(e){
let name = document.getElementById('input').value;
area.innerText = `Thanks for joining us ${name}` ;
e.preventDefault();
})


function displayGetStarted(){
let cat = document.querySelector('.category');
const c = cat.classList;

c.toggle("showGet");

cat.innerHTML += '<a href="blog2.html"><i class="fa fa-x" style="font-size:2rem;color:white;"></i></a>';
}



function displayForm(){
let form = document.querySelector(".form");
const f = form.classList;

 f.toggle("formShow");
}





