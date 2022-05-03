"use strict";

let currentlySelectedValue = undefined;
let submitButton = document.querySelector(".card-button--submit");

document.addEventListener("input", (event) => {
  if (event.target.getAttribute("name") === "rating") {
    currentlySelectedValue = event.target.id;
  }
});

submitButton.addEventListener("click", () => {
  const mainCardContainer = document.querySelector(".card__main");
  const thanksCardContainer = document.querySelector(".card__thanks");
  const thanksCardSelectedInfo = document.querySelector(".card-selected");
  if (!currentlySelectedValue) {
    return;
  }
  mainCardContainer.classList.add("invisible");
  thanksCardContainer.classList.remove("invisible");
  thanksCardSelectedInfo.innerHTML = `You selected ${currentlySelectedValue} out of 5`;
});
