const menu = document.getElementById("menu");
const close = document.getElementById("close");
const offset = document.getElementById("offset");
const offsetwrapper = document.getElementById("offset-wrapper");
const body = document.getElementById("body");
const prev = document.getElementById("btn-prev");
const next = document.getElementById("btn-next");
const slider1 = document.getElementById("slider-1");
const slider2 = document.getElementById("slider-2");
const span = document.getElementsByClassName("close")[0];
const wrapper = document.getElementById("jancok");
const title = document.getElementById("title");
let number = 1;

console.log(number);
menu.onclick = function () {
  offset.style.left = "0px";
  body.style.overflowY = "hidden";
  offsetwrapper.style.left = "0px";
};

close.onclick = function () {
  offset.style.left = "100%";
  offsetwrapper.style.left = "100%";
  body.style.overflowY = "visible";
};

next.onclick = function () {
  if (number >= 1) {
    slider1.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    slider2.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)";
    wrapper.style.borderImage = `url("images/border-2.jpg") 20 stretch`;
    title.src = "images/empire-title-2.svg";

    number = number + 1;
  }
};

prev.onclick = function () {
  if (number >= 2) {
    slider1.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)";
    slider2.style.clipPath = "polygon(100% 0, 0 0, 0 100%, 100% 100%)";
    wrapper.style.borderImage = `url("images/border.jpg") 20 stretch`;
    title.src = "images/empire-title.svg";

    number = number - 1;
  }
};

span.onclick = function () {
  modal.style.display = "none";
  body.style.overflow = "visible";
};

// Get the modal
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");

//   img.onclick = function (testing) {
//     modal.style.display = "block";
//     modalImg.src = this.src;
//     console.log(testing);
//   };

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  body.style.overflow = "hidden";
}
