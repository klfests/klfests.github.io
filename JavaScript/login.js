function loginValidate() {
  var mail = "klfests@kluniversity.in";
  var pass = "klfests";
  var email = document.log.email.value;
  var pwd = document.log.pwd.value;

  console.log(email);
  console.log(pwd);

  if (email !== mail || pwd !== pass) {
    alert("Wrong Credentials");
    document.log.pwd.value = "";
    document.log.pwd.focus();
    return false;
  }
  alert("Valid Credentials");
  return true;
}
