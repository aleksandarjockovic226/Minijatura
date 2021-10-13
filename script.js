// Gallery

let galleryImages = document.querySelectorAll(".img-gallery");
let latestOpenedImg;
let windowWidth = window.innerWidth;

let container = document.body;

if (galleryImages) {
  galleryImages.forEach(function (image, index) {
    image.onclick = function () {
      let getElementCss = window.getComputedStyle(image);
      let getFullImgUrl = getElementCss.getPropertyValue("background-image");
      let getImageUrlPos = getFullImgUrl.split("img/");
      let setNewImgUrl = getImageUrlPos[1].replace('")', "");

      latestOpenedImg = index + 1;

      let newImgWindow = document.createElement("div");
      container.appendChild(newImgWindow);
      container.style.overflow = "hidden";
      newImgWindow.setAttribute("class", "img-window");
      newImgWindow.setAttribute("onclick", "closeImg()");

      let newImg = document.createElement("img");
      newImgWindow.appendChild(newImg);
      newImg.setAttribute("src", "img/" + setNewImgUrl);
      newImg.setAttribute("id", "current-img");

      newImg.onload = function () {
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) / 2) - 40;

        let newNextBtn = document.createElement("a");
        let btnNextText = document.createTextNode(">");
        newNextBtn.appendChild(btnNextText);
        container.appendChild(newNextBtn);
        newNextBtn.setAttribute("class", "img-btn-next");
        newNextBtn.setAttribute("onclick", "changeImg(1)");
        newNextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

        let newPrewBtn = document.createElement("a");
        let btnPrewText = document.createTextNode("<");
        newPrewBtn.appendChild(btnPrewText);
        container.appendChild(newPrewBtn);
        newPrewBtn.setAttribute("class", "img-btn-prew");
        newPrewBtn.setAttribute("onclick", "changeImg(0)");
        newPrewBtn.style.cssText = "left: " + calcImgToEdge + "px;";
      };
    };
  });
}

function closeImg() {
  document.querySelector(".img-window").remove();
  document.querySelector(".img-btn-next").remove();
  document.querySelector(".img-btn-prew").remove();
  container.style.overflow = "scroll";
}

function changeImg(changeDir) {
  document.querySelector("#current-img").remove();

  let getImgWindow = document.querySelector(".img-window");
  let newImg = document.createElement("img");
  getImgWindow.appendChild(newImg);

  let calcNewImg;
  if (changeDir === 1) {
    calcNewImg = latestOpenedImg + 1;
    if (calcNewImg > galleryImages.length) {
      calcNewImg = 1;
    }
  } else if (changeDir === 0) {
    calcNewImg = latestOpenedImg - 1;
    if (calcNewImg < 1) {
      calcNewImg = galleryImages.length;
    }
  }

  newImg.setAttribute("src", "img/img" + calcNewImg + ".jpg");
  newImg.setAttribute("id", "current-img");

  latestOpenedImg = calcNewImg;

  newImg.onload = function () {
    let imgWidth = this.width;
    let calcImgToEdge = (windowWidth - imgWidth) / 2 - 40;

    let nextBtn = document.querySelector(".img-btn-next");
    nextBtn.style.cssText = "right: " + calcImgToEdge + "px;";

    let prewBtn = document.querySelector(".img-btn-prew");
    prewBtn.style.cssText = "left: " + calcImgToEdge + "px;";
  };
}

// Form show/hide

let form = document.getElementById("form");

function show() {
  form.style.display = "flex"
  document.getElementById("overlay").style.display = "block";
  container.style.overflow = "hidden";
}
function hide() {
  form.style.display = "none"
  document.getElementById("overlay").style.display = "none";
  container.style.overflow = "scroll";
}

// Form validation **CONTACT**

let CName = document.forms["contact"]["ime"];
let CMail = document.forms["contact"]["mail"];
let CSubject = document.forms["contact"]["predmet"];
let CMessage = document.forms["contact"]["poruka"];

let messageCNameIcon = document.getElementById("imeC");
let messageCMailIcon = document.getElementById("mailC");
let messageCSubjectIcon = document.getElementById("predmetC");
let messageCMessageIcon = document.getElementById("porukaC");

function valCName() {
  event.preventDefault();

  if (CName.value.length >= 1 && CName.value.length < 4) {
    messageCNameIcon.style.fill = "red";
    messageCNameIcon.classList.add("shakeAnim");
  } else if (CName.value.length == 0) {
    messageCNameIcon.style.fill = "red";
    messageCNameIcon.classList.add("shakeAnim");
  } else {
    messageCNameIcon.style.fill = "black";
    messageCNameIcon.classList.remove("shakeAnim");

  }
}

function valCMail() {
  event.preventDefault();

  if (CMail.value.length == 0) {
    messageCMailIcon.style.fill = "red";
    messageCMailIcon.classList.add("shakeAnim");
  } else if (CMail.value.length < 13) {
    messageCMailIcon.style.fill = "red";
    messageCMailIcon.classList.add("shakeAnim");
  } else if (CMail.value.indexOf("@") == -1) {
    messageCMailIcon.style.fill = "red";
    messageCMailIcon.classList.add("shakeAnim");
  } else if (CMail.value.indexOf(".com") == -1) {
    messageCMailIcon.style.fill = "red";
    messageCMailIcon.classList.add("shakeAnim");
  } else {
    messageCMailIcon.style.fill = "black";
    messageCMailIcon.classList.remove("shakeAnim");
  }
}

function valCSubject() {
  event.preventDefault();

  if (CSubject.value.length >= 1 && CSubject.value.length < 3) {
    messageCSubjectIcon.style.fill = "red";
    messageCSubjectIcon.classList.add("shakeAnim");
  } else if (CSubject.value.length == 0) {
    messageCSubjectIcon.style.fill = "red";
    messageCSubjectIcon.classList.add("shakeAnim");
  } else {
    messageCSubjectIcon.style.fill = "black";
    messageCSubjectIcon.classList.remove("shakeAnim");
  }
}

function valCMessage() {
  event.preventDefault();

  if (CMessage.value.length >= 1 && CMessage.value.length < 15) {
    messageCMessageIcon.style.fill = "red";
    messageCMessageIcon.classList.add("shakeAnim");
  } else if (CMessage.value.length == 0) {
    messageCMessageIcon.style.fill = "red";
    messageCMessageIcon.classList.add("shakeAnim");
  } else {
    messageCMessageIcon.style.fill = "black";
    messageCMessageIcon.classList.remove("shakeAnim");

  }
}

// Form validation **TEAM**

let TName = document.forms["team"]["ime"];
let TNumber = document.forms["team"]["broj"];
let TMail = document.forms["team"]["mail"];
let TMessage = document.forms["team"]["poruka"];


let messageTNameIcon = document.getElementById("imeT");
let messageTNumberIcon = document.getElementById("brojT");
let messageTMailIcon = document.getElementById("mailT");
let messageTMessageIcon = document.getElementById("porukaT");

function valTName() {
  event.preventDefault();

  if (TName.value.length >= 1 && TName.value.length < 4) {
    messageTNameIcon.style.fill = "red";
    messageTNameIcon.classList.add("shakeAnim");
  } else if (TName.value.length == 0) {
    messageTNameIcon.style.fill = "red";
    messageTNameIcon.classList.add("shakeAnim");
  } else {
    messageTNameIcon.style.fill = "black";
    messageTNameIcon.classList.remove("shakeAnim");
  }
}

function valTNumber() {
  if (TNumber.value.length == 0) {
    messageTNumberIcon.style.fill = "red";
    messageTNumberIcon.classList.add("shakeAnim");
  } else if (TNumber.value.length >= 1 && TNumber.value.length < 9) {
    messageTNumberIcon.style.fill = "red";
    messageTNumberIcon.classList.add("shakeAnim");
  } else {
    messageTNumberIcon.style.fill = "black";
    messageTNumberIcon.classList.remove("shakeAnim");
  }
}

function valTMail() {
  event.preventDefault();

  if (TMail.value.length == 0) {
    messageTMailIcon.style.fill = "red";
    messageTMailIcon.classList.add("shakeAnim");
  } else if (TMail.value.length < 13) {
    messageTMailIcon.style.fill = "red";
    messageTMailIcon.classList.add("shakeAnim");
  } else if (TMail.value.indexOf("@") == -1) {
    messageTMailIcon.style.fill = "red";
    messageTMailIcon.classList.add("shakeAnim");
  } else if (TMail.value.indexOf(".com") == -1) {
    messageTMailIcon.style.fill = "red";
    messageTMailIcon.classList.add("shakeAnim");
  } else {
    messageTMailIcon.style.fill = "black";
    messageTMailIcon.classList.remove("shakeAnim");
  }
}

function valTMessage() {
  event.preventDefault();

  if (TMessage.value.length >= 1 && TMessage.value.length < 15) {
    messageTMessageIcon.style.fill = "red";
    messageTMessageIcon.classList.add("shakeAnim");
  } else if (TMessage.value.length == 0) {
    messageTMessageIcon.style.fill = "red";
    messageTMessageIcon.classList.add("shakeAnim");
  } else {
    messageTMessageIcon.style.fill = "black";
    messageTMessageIcon.classList.remove("shakeAnim");
  }
}

// Animations

let animations = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `anim1 1.5s ${entry.target.dataset.delay} forwards ease-out`;
      observer.unobserve(entry.target);
    } else {
      entry.target.style.animation = "none";
    }
  });
});

animations.forEach((image) => {
  observer.observe(image);
});

// Mobile nav hide/show

let mobileNav = document.querySelector("#nav")

function displayNav() {
  mobileNav.style.left = "0"
}

function clickedNav() {
  mobileNav.style.left = "1100px"
}

// slide partners

const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  slider.classList.remove('active');
  isDown = false
});

slider.addEventListener('mouseup', () => {
  slider.classList.remove('active');
  isDown = false
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk
});