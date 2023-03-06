// use strict;
const ratingNumbers = document.querySelectorAll(".component__number");
let currentRatingNumber = "";
const submitBtn = document.querySelector(".component__submit");
const ratingComponent = document.querySelector(".component-rating");
const thanksComponent = document.querySelector(".component-thanks");
const thanksResultNumber = document.querySelector(".component__result-number");

function removeActive() {
  ratingNumbers.forEach((el) => {
    el.classList.remove("active");
  });
}

function setCurrRatingNum(currNum) {
  currentRatingNumber = currNum;
  thanksResultNumber.innerHTML = currentRatingNumber;
}

function setShowing() {
  ratingComponent.classList.remove("showing");
  thanksComponent.classList.add("showing");
}

ratingNumbers.forEach((elem) => {
  elem.addEventListener("click", () => {
    removeActive();
    elem.classList.add("active");
    setCurrRatingNum(elem.attributes.value.value);
  });
});

submitBtn.addEventListener("click", () => {
  if (currentRatingNumber == "") {
    alert("please select a Number !");
  } else {
    setShowing();
  }
});