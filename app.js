// // BURGER MENU

function displayMenu() {

  const menuAppear = document.getElementById('#buttonMenu');    
  if(menuAppear.style.display === "block") { 
    menuAppear.style.display = "none";
  }
  else { 
    menuAppear.style.display = "block";
  }
}


//CAROUSEL (Tutorial used from https://softauthor.com/javascript-image-slider-slideshow-carousel/)

// get images and li from HTML
let carouselImages = document.getElementsByClassName("carousel");
let dotNode = document.getElementsByTagName("li");
let currentIndex = 0;

// create the dots at bottom of images
for (let i = 0; i < carouselImages.length; i++) {
  let createDot = document.createElement("li");
  
  createDot.className = "fa fa-circle"; //FontAwesome dot icon
  createDot.setAttribute("onclick", "dotClick(this.id)");
  createDot.setAttribute("id", parseInt(i)); //parseInt will convert string to integer
  
  let dotContainer = document.querySelector(".dotList");
  dotContainer.appendChild(createDot);
}


//display image function
function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
  }
  carouselImages[currentIndex].style.display = "block";
}

// display dot function
function displayDot() {
  for (let j = 0; j < dotNode.length; j++) {
    dotNode[j].style.color = "grey";
  }
  dotNode[currentIndex].style.color = "black";
}

// scroll forward through images function
function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  
  displayImage();
  displayDot();
}

// scroll backward through images function
function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  
  displayImage();
  displayDot();
}

// onclick function
function dotClick(c) {
  currentIndex = c;
  displayImage();
  displayDot();
}

//call functions
displayImage();
displayDot();

console.log('Thank you for visiting my website')
console.log('If you would like to collaborate together please don\'t hesitate to reach out to me')
console.log('Click my photo at the top of the page!')

// TEST

// TEXT CHANGER



    // const nextBtn = document.getElementById("btn_next");
    // function changeText() {
    //     const changeTheHL = document.getElementById("txt");
    //     var chapter = Number(textBox.dataset.chapter);

  const myArray = [
  'Front-End Web Developer',
  'Creator',
  'Father',
  'Husband',
  'Son',
  'Uncle',
  'Hockey Fan',
  'Comedy Fan',
  'Guy with a beard',
  'Juno College Alum Cohort 38!'
    ];

let i = 0;

document.querySelector("#txt").innerHTML = myArray[i];

function nextHeadline() {
  if (i < myArray.length - 1) {
  i++;
  } else {
    i = 0;
  }
  document.querySelector('#txt').innerHTML = myArray[i]
}




