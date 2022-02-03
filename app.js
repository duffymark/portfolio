// BURGER MENU

 function displayMenu() {

  const menuAppear = document.getElementById('#buttonMenu');    
  if(menuAppear.style.display === "block") { 
    menuAppear.style.display = "none";
  }
  else { 
    menuAppear.style.display = "block";
  }
}

//CAROUSEL 

//get all the images and li from HTML
let carouselImages = document.getElementsByClassName("carousel");
let dotNode = document.getElementsByTagName("li");
let currentIndex = 1;

//create dots/circle
for (let i = 0; i < carouselImages.length; i++) {
  let newDot = document.createElement("li");
  
  newDot.className = "fa fa-circle";
  newDot.setAttribute("onclick", "dotClick(this.id)");
  newDot.setAttribute("id", parseInt(i));
  
  let dotContainer = document.querySelector(".dotList");
  dotContainer.appendChild(newDot);
}

//function1
function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
  }
  carouselImages[currentIndex].style.display = "block";
}

//function2
function displayDot() {
  for (let j = 0; j < dotNode.length; j++) {
    dotNode[j].style.color = "grey";
  }
  dotNode[currentIndex].style.color = "black";
}

//function3
function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  
  displayImage();
  displayDot();
}

//function4
function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 1;
  } else {
    currentIndex++;
  }
  
  displayImage();
  displayDot();
}

//function5
function dotClick(c) {
  currentIndex = c;
  displayImage();
  displayDot();
}

//initial stage
displayImage();
displayDot();

