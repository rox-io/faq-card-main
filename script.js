const arrows = document.querySelectorAll("ul img");
const hiddenLis = document.querySelectorAll("ul .hidden-li");
const firstLi = document.querySelectorAll("ul .first-li");
const uls = document.querySelectorAll("#accordion-list ul");

let arrowUp = false;
for(let i = 0; i < uls.length; i++) {
    uls[i].addEventListener("click", () => {
        console.log('clicked');
        if(!arrowUp) {
            activeArrow(arrows, arrows[i]);
        }
        else {
            arrows[i].classList.remove("rotate-arrows");
            arrowUp = false;
        }

    //uls[i].addEventListener("click", () => {
    //    if(!arrowUp) {
    //        activeArrow(arrows, arrows[i]);
    //        hideLi(hiddenLis, hiddenLis[i]);
    //        removeFontStyle(firstLi, firstLi[i]);
    //        arrowUp = true;
    //        console.log(arrowUp);
    //    }
    //    else {
    //        hideLi(hiddenLis, hiddenLis[i]);
    //        removeFontStyle(firstLi, firstLi[i]);
    //        arrowUp = false;
    //        console.log(arrowUp);
    //    }
    //})
    })
}

//check active list
function activeArrow(arrows, selected) {
     for(let arrow of arrows) {
        arrow.classList.remove("rotate-arrows");
    }
    selected.classList.add("rotate-arrows");
    arrowUp = true;
}

function hideLi(lis, selected) {
    for(let li of lis) {
        li.classList.remove("show-lis");
    }
    selected.classList.add("show-lis");
}

function removeFontStyle(lis, selected) {
    for(let li of lis) {
        li.classList.remove("bold-font");
    }
    selected.classList.add("bold-font");
}