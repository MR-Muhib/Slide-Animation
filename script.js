const slideShowElement = document.querySelectorAll(".slide__container");

let countElement = 0;
const id = setInterval(() => {
  countElement++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");

  if (countElement > slideShowElement.length) {
    slideShowElement[0].classList.add("current");
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);
