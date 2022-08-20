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



// Select all slides
const slidesiv = document.querySelectorAll(".slideiv");

// loop through slides and set each slides translateX property to index * 100% 
slidesiv.forEach((x, i) => {
  x.style.transform = `translateX(${i * 100}%)`;
});


// select next slide button
const nextSlideiv = document.querySelector(".rightArrowiv");

// current slide counter
let currentSlideiv = 0;
// maximum number of slides
let maxSlideiv = slidesiv.length - 1;

// add event listener and navigation functionality
nextSlideiv.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlideiv === maxSlideiv) {
    currentSlideiv = 0;
  } else {
    currentSlideiv++;
  }

//   move slide by -100%
  slidesiv.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlideiv)}%)`;
  });
});

// select prev slide button
const prevSlideiv = document.querySelector(".leftArrowiv");

// add event listener and navigation functionality
prevSlideiv.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlideiv === 0) {
    currentSlideiv = maxslideiv;
  } else {
    currentSlideiv--;
  }

  //   move slide by 100%
  slidesiv.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlideiv)}%)`;
  });
});


// Select all slides
const slidesv = document.querySelectorAll(".slidev");

// loop through slides and set each slides translateX property to index * 100% 
slidesv.forEach((x, i) => {
  x.style.transform = `translateX(${i * 100}%)`;
});


// select next slide button
const nextSlidev = document.querySelector(".rightArrowv");

// current slide counter
let currentSlidev = 0;
// maximum number of slides
let maxSlidev = slidesv.length - 1;

// add event listener and navigation functionality
nextSlidev.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (currentSlidev === maxSlidev) {
    currentSlidev = 0;
  } else {
    currentSlidev++;
  }

//   move slide by -100%
  slidesv.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlidev)}%)`;
  });
});

// select prev slide button
const prevSlidev = document.querySelector(".leftArrowv");

// add event listener and navigation functionality
prevSlidev.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (currentSlidev === 0) {
    currentSlidev = maxslidev;
  } else {
    currentSlidev--;
  }

  //   move slide by 100%
  slidesv.forEach((x, i) => {
    x.style.transform = `translateX(${100 * (i - currentSlidev)}%)`;
  });
});




// PHP BACKEND

var myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function(e){
  e.preventDefault();
  const formData = new FormData(this);
  const searchParams = new URLSearchParams();
  
  for(const pair of formData){
    searchParams.append(pair[0],pair[1]);
  }
  
  fetch("message.php", {
    method: "post",
    body: searchParams
  }).then(function(res){
    return res.text();
  }).then(function(text){
    console.log(text);
  }).catch(function(err){
    console.log(err)
  })
  
  var I = document.querySelector("#usernameInput");
    var II = document.querySelector("#emailInput");
    var III = document.querySelector("#messageInput");
    
    I.value = "";
    II.value = "";
    III.value = "";
    
  var pop =  document.querySelector(".message");
    if(!I.value || !II.value || !III.value){
    pop.innerText="Please fill in all fields";
    
    }else{
    pop.innerText="Thank you for texting";
    }
});
