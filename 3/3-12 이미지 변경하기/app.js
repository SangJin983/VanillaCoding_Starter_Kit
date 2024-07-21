const rightArrow = document.querySelector(".right.arrow")
const lists = document.querySelectorAll("li");

rightArrow.onclick = function() {
  lists[0].classList.remove("show");
  lists[1].classList.add("show");
};
