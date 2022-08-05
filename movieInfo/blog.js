//*********nav menu bar toggle***

const menuBar = document.querySelector('.menuBar');
const menuExit = document.querySelector('.menuBarExit');
let x = document.getElementById("nav");

menuBar.addEventListener('click', function() {
 if(x.className === "navContainer"){
 x.className += " toggle";
 }else{
 x.className === "navContainer";
 }
 
 menuExit.style = "display:initial";

menuBar.style = "display:none";

})

menuExit.addEventListener('click', function() {
 menuExit.style = "display:none";

menuBar.style = "display:initial";

})


/* ...slide..........*/
// Select all slides
const slides = document.querySelectorAll(".slide");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((x, i) => {
  x.style.transform = `translateX(${i * 100}%)`;
});


// select next slide button
const nextSlide = document.querySelector(".rightArrow");

// current slide counter
let currentSlide = 0;
// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

//   move slide by -100%
  slides.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
});

// select prev slide button
const prevSlide = document.querySelector(".leftArrow");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlide === 0) {
    currentSlide = maxslide;
  } else {
    currentSlide--;
  }

  //   move slide by 100%
  slides.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
  });
});




/*......  ....nav logo...........*/

const update = document.querySelector('.slider');
const logo = document.querySelector('.navLogo');
const content = document.querySelector('.catMainContainer');
const navv = document.querySelector('.navContainer');
const navvv = navv.classList;
const cont = content.classList;
const up = update.classList;
logo.addEventListener('click', function(e) {
 navvv.toggle("darkNav");
 e.preventDefault;
 })
 
 logo.addEventListener('click', function(e) {
 cont.toggle("darkContent");
 e.preventDefault;
 })
 
 logo.addEventListener('click', function(e) {
 up.toggle("darkUpdate");
 e.preventDefault;
 })
 
 
 const i = document.querySelector('.catImgContainer.i');
 const ii = document.querySelector('.catImgContainer.ii');
 const iii = document.querySelector('.catImgContainer.iii');
 const iv = document.querySelector('.catImgContainer.iv');
 
 
 
  
 setInterval(function(){ii.innerHTML = `<img src="Download/indian2.jpeg" alt="post-2" class="catImg" >`;
 },30000);
 
 setInterval(function(){ii.innerHTML = `<img src="Download/indian3.jpeg" alt="post-3" class="catImg" >`;
 },40000);
 
 setInterval(function(){ii.innerHTML = `<img src="Download/indian.jpeg" alt="post-1" class="catImg" >`;
 },50000);
 
 setInterval(function(){i.innerHTML = `<img src="Download/comedy2.jpeg" alt="post-2" class="catImg" >`;
 },20000);
 
 setInterval(function(){i.innerHTML = `<img src="Download/comedy3.jpeg" alt="post-3" class="catImg" >`;
 },30000);
 
 setInterval(function(){i.innerHTML = `<img src="Download/comedy.jpeg" alt="post-1" class="catImg" >`;
 },40000);
 
 setInterval(function(){iii.innerHTML = `<img src="Download/crime2.jpeg" alt="post-2" class="catImg" >`;
 },10000);
 
 setInterval(function(){iii.innerHTML = `<img src="Download/crime3.jpeg" alt="post-3" class="catImg" >`;
 },20000);
 
 setInterval(function(){iii.innerHTML = `<img src="Download/crime.jpg" alt="post-1" class="catImg" >`;
 },30000);
 
 setInterval(function(){iv.innerHTML = `<img src="Download/cartoon2.jpeg" alt="post-2" class="catImg" >`;
 },50000);
 
 setInterval(function(){iv.innerHTML = `<img src="Download/cartoon3.jpeg" alt="post-3" class="catImg" >`;
 },60000);
 
 setInterval(function(){iv.innerHTML = `<img src="Download/cartoon.jpeg" alt="post-1" class="catImg" >`;
 },70000);