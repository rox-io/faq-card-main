const arrows = document.querySelectorAll("ul img");
const hiddenLis = document.querySelectorAll("ul .hidden-li");
const firstLis = document.querySelectorAll("ul .first-li");
const uls = document.querySelectorAll("#accordion-list ul");

let currentSelectedList;
let previousSelectedList;
for (let i = 0; i < uls.length; i++) {
  uls[i].addEventListener("click", () => {
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