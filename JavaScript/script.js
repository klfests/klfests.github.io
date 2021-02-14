var logged = true,
  isSearched = true,
  festname = "Select",
  mailSent = false,
  mailVerified = false;

window.onload = function onpageload() {
  var el1 = document.getElementById("login");
  var el2 = document.getElementById("signup");
  var el3 = document.getElementById("account");
  if (logged === true) {
    if (!el1.classList.contains("hide")) el1.classList.add("hide");
    if (!el2.classList.contains("hide")) el2.classList.add("hide");
    if (el3.classList.contains("hide")) el3.classList.remove("hide");
  } else {
    if (el1.classList.contains("hide")) el1.classList.remove("hide");
    if (el2.classList.contains("hide")) el2.classList.remove("hide");
    if (!el3.classList.contains("hide")) el3.classList.add("hide");
  }
  try {
    document.getElementById("search").value = "";
  } catch (error) {}
  try {
    document.getElementById("date").innerHTML = new Date().getFullYear();
  } catch (error) {}
  // try {
  //   search();
  // } catch (error) {}
  try {
    var title = document.getElementById("title");
    var title2 = document.getElementById("title2");
    var font = ["abhi1", "abhi2", "abhi3", "abhi4", "abhi5"];
    var abhi = font[Math.floor(Math.random() * font.length)];
    title.style.fontFamily = abhi;
    title2.style.fontFamily = abhi;
    if (title.style.fontFamily === "abhi6") {
      title.style.fontSize = 70 + "px";
      title2.style.fontSize = 70 + "px";
    }
  } catch (error) {}
  try {
    var typed1 = new Typed(".typed", {
      strings: [" ", "Faster", "Smoother", "Easier"],
      typeSpeed: 100,
      backSpeed: 70,
      loop: true,
    });
    setTimeout(() => {
      var typed2 = new Typed(".title", {
        strings: ["Welcome To KL FESTS"],
        typeSpeed: 150,
      });
    }, 500);
  } catch (error) {}
};

function signout() {
  var log = document.querySelector("#login");
  var sup = document.querySelector("#signup");
  var acc = document.querySelector("#account");
  menutoggle();
  console.log(
    "Before: \n" + log.classList + "\n" + sup.classList + "\n" + acc.classList
  );
  changelogged();
  log.classList.toggle("hide");
  sup.classList.toggle("hide");
  acc.classList.toggle("hide");
  console.log(
    "After: \n" + log.classList + "\n" + sup.classList + "\n" + acc.classList
  );
}

function changelogged() {
  logged = false;
}
/* <------------------------------ Search Suggestion Start ------------------------------> */

function innerhtml(list) {
  document.getElementById("autocom-box").innerHTML = list;
}

function setatr() {
  let allList = document.getElementById("autocom-box").querySelectorAll("li");
  for (let i = 0; i < allList.length; i++) {
    allList[i].setAttribute("onclick", "select(this)");
  }
}

function select(element) {
  let selectUserData = element.textContent;
  document.getElementById("search").value = selectUserData;
  innerhtml(" ");
  isSearched = true;
  change("../Fest/fest.html");
}

/* <------------------------------- Search Suggestion End -------------------------------> */

/* <-------------------------------- Search Click Start --------------------------------> */

function search() {
  var search = document.getElementById("search");
  isSearched = true;
  festname = search.value;
  search.value = "";
}

function change(value) {
  window.location.href = value;
}

/* ------------------------------- Search Click End ------------------------------- */

/* ------------------------------- Menu Toggle Start ------------------------------- */

function menutoggle() {
  try {
    const togglemenu = document.querySelector(".account-dropdown");
    togglemenu.classList.toggle("active");
  } catch (error) {
    console.log(error);
  }
}

/* ------------------------------- Menu Toggle End ------------------------------- */

/* ------------------------------- OTP Logic Start ------------------------------- */

var otp;
function generateOTP() {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 6; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  this.otp = OTP;
  return OTP;
}

function validateOTP() {
  var OTP = document.getElementById("otp-field");
  if (OTP === otp) {
    return true;
  } else {
    return false;
  }
}

/* ------------------------------- OTP Logic End ------------------------------- */

/*function loginValidate(usermail) {
  var email = usermail;
  var atpos = email.indexOf("@");
  var dotpos = email.x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert(
      "Please enter a valid e-mail address \n atpostion:" +
        atposition +
        "\n dotposition:" +
        dotposition
    );
    return false;
  } else {
    return true;
  }
}

function signupValidate(userMail) {
  var email = userMail;
  var atpos = email.indexOf("@");
  var dotpos = email.x.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert(
        "Please enter a valid e-mail address \n atpostion:" +
          atposition +
          "\n dotposition:" +
          dotposition
      );
    return false;
  } else {
    return true;
  }
}*/
