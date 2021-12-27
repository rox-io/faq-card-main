const arrows = document.querySelectorAll("ul img");
const hiddenLis = document.querySelectorAll("ul .hidden-li");
const firstLi = document.querySelectorAll("ul .first-li");
const uls = document.querySelectorAll("#accordion-list ul");

let arrClicked;
for (let i = 0; i < uls.length; i++) {
  uls[i].addEventListener("click", () => {
    if(arrClicked === i) {
      console.log("arrow toggle");
      arrows[i].classList.toggle("rotate-arrows");
    }
    else {
      activeArrow(arrows, arrows[i]);
      arrClicked = i;
      console.log(`${arrClicked} another clicked arrow`);
    }
  })
}

//check active list
function activeArrow(arrows, selected) {
  for (let arrow of arrows) {
    arrow.classList.remove("rotate-arrows");
  }
  selected.classList.add("rotate-arrows");
}

function hideLi(lis, selected) {
  for (let li of lis) {
    li.classList.remove("show-lis");
  }
  selected.classList.add("show-lis");
}

function removeFontStyle(lis, selected) {
  for (let li of lis) {
    li.classList.remove("bold-font");
  }
  selected.classList.add("bold-font");
}