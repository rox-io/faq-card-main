const arrows = document.querySelectorAll(".accordion-list img");
const hiddenLis = document.querySelectorAll("ul .hidden-li");
const firstLis = document.querySelectorAll("ul .first-li");
const listItem = document.querySelectorAll(".accordion-list");

let currentSelectedList;
let previousSelectedList;
for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener("click", () => {
      previousSelectedList = currentSelectedList;
      currentSelectedList = i;
    if(currentSelectedList === previousSelectedList) {
      arrows[i].classList.toggle("rotate-arrows");
      hiddenLis[i].classList.toggle("show-lis");
      firstLis[i].classList.toggle("bold-font");
    }
    else {
      activeArrow(arrows, arrows[i]);
      hideLi(hiddenLis, hiddenLis[i]);
      removeFontStyle(firstLis, firstLis[i]);
    }
  })
}

//ARROW ROTATION
function activeArrow(arrows, selected) {
  for (let arrow of arrows) {
    arrow.classList.remove("rotate-arrows");
  }
  selected.classList.add("rotate-arrows");
}

//DISPLAY LISTS
function hideLi(lis, selected) {
  for (let li of lis) {
    li.classList.remove("show-lis");
  }
  selected.classList.add("show-lis");
}

//BOLD FONT FOR SELECTED LIST
function removeFontStyle(lis, selected) {
  for (let li of lis) {
    li.classList.remove("bold-font");
  }
  selected.classList.add("bold-font");
}