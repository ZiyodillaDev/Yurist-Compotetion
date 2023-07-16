// header
var modal = document.querySelector(".modalHelp");
var modal2 = document.querySelector(".modalSuccess");
var btn = document.querySelectorAll(".modalBtn");
var span = document.querySelectorAll(".closeHelp");
var span2 = document.querySelectorAll(".closeHelp2");

btn.forEach((element) => {
  element.onclick = function () {
    modal.style.display = "block";
  };
});

span.forEach((element) => {
  element.onclick = function () {
    modal.style.display = "none";
  };
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const modalForm = document.querySelector(".sendForm");

modalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  modal.style.display = "none";
  modal2.style.display = "block";
});

span2.forEach((element) => {
  element.onclick = function () {
    modal2.style.display = "none";
  };
});
