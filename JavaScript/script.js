var islogged = true,
  isSearched = true,
  festname = "Select";

window.onload = function onpageload() {
  var el1 = document.getElementById("login");
  var el2 = document.getElementById("signup");
  var el3 = document.getElementById("account");
  if (islogged === true) {
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
    var font = ["abhi1", "abhi2", "abhi3", "abhi4", "abhi5", "abhi6", "abhi7"];
    title.style.fontFamily = font[Math.floor(Math.random() * font.length)];
    if (
      title.style.fontFamily === "abhi7" ||
      title.style.fontFamily === "abhi2"
    ) {
      title.style.fontSize = 70 + "px";
    }
  } catch (error) {}
};

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
    const togglemenu = document.querySelector(".menu");
    togglemenu.classList.toggle("active");
    console.log(togglemenu.classList);
  } catch (error) {
    console.log(error);
  }
}

/* ------------------------------- Menu Toggle End ------------------------------- */

/*function loginValidate() {
  var email = document.myform.email.value;
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

/*function signupValidate() {
  var email = document.myform.email.value;
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
