const rightArrow = document.querySelector(".right");
const lists = document.querySelectorAll("li");

let currentImageIndex = 0;

rightArrow.onclick = function() {
  lists[currentImageIndex].classList.remove("show");
  
  currentImageIndex = currentImageIndex +1;
  
  lists[currentImageIndex].classList.add("show");
};
