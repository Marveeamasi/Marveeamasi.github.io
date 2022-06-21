const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav.navCont ul li");
window.onscroll = function(){
  var current = "";

  sections.forEach(function(section){
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach(function(li){
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};





function initial(){
let skillCont = document.querySelector(".skillCont");

if(skillCont.className === "skillCont"){
skillCont.className += " initial";
skillCont.innerHTML+= `<a href="portIndex.html" class="x" style="color:white;font-size:2rem;z-index:9999;position:relative;">×</a>`;
}else{
skillCont.className ==="skillCont";
}
}








// Select all slides
const slidesi = document.querySelectorAll(".slidei");

// loop through slides and set each slides translateX property to index * 100% 
slidesi.forEach((x, i) => {
  x.style.transform = `translateX(${i * 100}%)`;
});


// select next slide button
const nextSlidei = document.querySelector(".rightArrowi");

// current slide counter
let currentSlidei = 0;
// maximum number of slides
let maxSlidei = slidesi.length - 1;

// add event listener and navigation functionality
nextSlidei.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlidei === maxSlidei) {
    currentSlidei = 0;
  } else {
    currentSlidei++;
  }

//   move slide by -100%
  slidesi.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlidei)}%)`;
  });
});

// select prev slide button
const prevSlidei = document.querySelector(".leftArrowi");

// add event listener and navigation functionality
prevSlidei.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlidei === 0) {
    currentSlidei = maxslidei;
  } else {
    currentSlidei--;
  }

  //   move slide by 100%
  slidesi.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlidei)}%)`;
  });
});


// Select all slides
const slidesii = document.querySelectorAll(".slideii");

// loop through slides and set each slides translateX property to index * 100% 
slidesii.forEach((x, i) => {
  x.style.transform = `translateX(${i * 100}%)`;
});


// select next slide button
const nextSlideii = document.querySelector(".rightArrowii");

// current slide counter
let currentSlideii = 0;
// maximum number of slides
let maxSlideii = slidesii.length - 1;

// add event listener and navigation functionality
nextSlideii.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlideii === maxSlideii) {
    currentSlideii = 0;
  } else {
    currentSlideii++;
  }

//   move slide by -100%
  slidesii.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlideii)}%)`;
  });
});

// select prev slide button
const prevSlideii = document.querySelector(".leftArrowii");

// add event listener and navigation functionality
prevSlideii.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlideii === 0) {
    currentSlideii = maxslideii;
  } else {
    currentSlideii--;
  }

  //   move slide by 100%
  slidesii.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlideii)}%)`;
  });
});




// Select all slides
const slidesiii = document.querySelectorAll(".slideiii");

// loop through slides and set each slides translateX property to index * 100% 
slidesiii.forEach((x, i) => {
  x.style.transform = `translateX(${i * 100}%)`;
});


// select next slide button
const nextSlideiii = document.querySelector(".rightArrowiii");

// current slide counter
let currentSlideiii = 0;
// maximum number of slides
let maxSlideiii = slidesiii.length - 1;

// add event listener and navigation functionality
nextSlideiii.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlideiii === maxSlideiii) {
    currentSlideiii = 0;
  } else {
    currentSlideiii++;
  }
  

//   move slide by -100%
  slidesiii.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlideiii)}%)`;
  });
});

// select prev slide button
const prevSlideiii = document.querySelector(".leftArrowiii");

// add event listener and navigation functionality
prevSlideiii.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlideiii === 0) {
    currentSlideiii = maxslideiii;

  } else {
    currentSlideiii--;
    
  }

  //   move slide by 100%
  slidesiii.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlideiii)}%)`;
  });
});






