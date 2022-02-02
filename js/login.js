let headTags = `<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>My Ist Project</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/styles.css">`;

let loginHtmlTags = `<div class="container">
      <div class="row">
        <div class="text" style="text-align:center">
          <h2>Login to your account<h2>
        </div>
        <a href="index.html">home<a>
        <form id="login_form" method="post">
          <div class="mb-3">
            <label>Email</label>
            <input type="email" class="form-control" id="userId" placeholder="email">
          </div>
          <div class="mb-3">
            <label>Password</label>
            <input type="password" class="form-control" id="userPwd" placeholder="password">
          </div>
          <div class="mb-3">
            <input type="submit" class="btn btn-primary btn-sm" value="Login">
          </div>
        </form>
      </div>
      </div>`;

let selLogin = document.querySelector("body");
selLogin.innerHTML = loginHtmlTags;
let selHead = document.querySelector("head");
selHead.innerHTML = headTags;

const login_form = document.getElementById("login_form");
login_form.addEventListener("submit", checkIdPwd);
function checkIdPwd(event) {
  event.preventDefault();
  let userId = document.getElementById("userId").value;
  let userPwd = document.getElementById("userPwd").value;
  let savedData = JSON.parse(localStorage.getItem("user"));
  let userFound;
  for (let i = 0; i < savedData.length; i += 1) {
    if (
      savedData[i].email === userId &&
      convertHash(savedData[i].password) === userPwd
    ) {
      userFound = savedData[i];
      break;
    }
  }
  if (userFound) {
    localStorage.setItem("loggedUser", JSON.stringify(userFound));
    location.replace("mydetails.html");
  } else {
    alert("invalid Username or password");
  }
}

function convertHash(string) {
  let inputPwd = [...string];
  let convertPwd = [];
  for (let i = 0; i < inputPwd.length; i++) {
    convertPwd[i] = inputPwd[i].charCodeAt() - (i + 1);
  }
  let outputPwd = [];
  for (let j = 0; j < convertPwd.length; j++) {
    outputPwd[j] = String.fromCharCode(convertPwd[j]);
  }
  return outputPwd.join("");
}
