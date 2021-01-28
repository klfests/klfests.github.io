let suggestions = [
  "Samyak",
  "Surabhi",
  "Hash Include",
  "#Include",
  "Zrotriya",
  "Spark",
  "Yantrik",
  "Race",
];

function ipbx(hello) {
  if (hello.value != null) {
    let userdata = hello.value;
    let emptyArray = [];
    if (userdata) {
      emptyArray = suggestions.filter((data) => {
        return data
          .toLocaleLowerCase()
          .startsWith(userdata.toLocaleLowerCase());
      });
      firstdata = emptyArray[0];
      emptyArray = emptyArray.map((data) => {
        return (data = "<li>" + data + "</li>");
      });
      showSuggestion(emptyArray, userdata);
      setatr();
    } else {
      innerhtml("");
    }
  } else {
    innerhtml("");
  }
}

function showSuggestion(list, userdata) {
  let listData;
  //console.log(userdata);
  if (!list.length) {
    try {
      userValue = inputBox.value;
      listData = "<li>" + userValue + "</li>";
    } catch (error) {
      listData = "<li> No Fests </li>";
    }
  } else {
    listData = list.join("");
  }
  innerhtml(listData);
}

try {
  window.onscroll = function () {
    if (window.scrollY > 100) {
      document.getElementById("scroll-down").style.display = "none";
    } else {
      document.getElementById("scroll-down").style.display = "block";
    }
  };
} catch (error) {}
