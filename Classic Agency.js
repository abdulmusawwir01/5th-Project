window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("menu").style.position = "fixed";
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "white";
    document.getElementById("menu").style.boxShadow = "0 0 30px rgba(0,0,0,.075)";
    document.getElementById("menu").style.borderBottom = "none";
    document.getElementById("menu").style.padding = "30px 40px";
  } else {
    document.getElementById("menu").style.top = "0";
    document.getElementById("menu").style.background = "rgba(255, 255, 255, 0)";
    document.getElementById("menu").style.boxShadow = "none";
    document.getElementById("menu").style.borderBottom = "1px solid #dcdcdc45";
    document.getElementById("menu").style.padding = "25px 40px";
  }
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("menu").style.transform = "translateY(-200px)";
  }
  else {
    document.getElementById("menu").style.transform = "translateY(0px)";
  }
}






var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);