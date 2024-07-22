const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");
const lists = document.querySelectorAll("li");

let currentImageIndex = 0;

rightArrow.onclick = function() {
  lists[currentImageIndex].classList.remove("show");
  
  currentImageIndex = currentImageIndex +1;

  if (currentImageIndex === 5) {
    currentImageIndex = 0;
  }
  
  lists[currentImageIndex].classList.add("show");
};

leftArrow.onclick = function() {
  lists[currentImageIndex].classList.remove("show");

  if (currentImageIndex === 0) {
    currentImageIndex = 5;
  }

  currentImageIndex = currentImageIndex -1;

  lists[currentImageIndex].classList.add("show");
};

/*
function updateImage(newIndex) {
  lists[currentImageIndex].classList.remove("show");
  currentImageIndex = newIndex;

  if (currentImageIndex >= lists.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = lists.length - 1;
  }

  lists[currentImageIndex].classList.add("show");
};

rightArrow.onclick = function () {
  updateImage(currentImageIndex + 1);
};

leftArrow.onclick = function () {
  updateImage(currentImageIndex - 1);
};
*/