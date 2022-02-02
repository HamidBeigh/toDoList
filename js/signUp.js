let headTags = `<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>My Ist Project</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/styles.css">`;

let signUpHtmlTags = `<div class="container">
        <div class="row">
            <div class="text" style="text-align:center">
              <h2>Create Your Account<h2>
            </div>
            <div>
              <div class="col-12" id="error" style="color:red"></div>
              <div class="col-4">
                <a href="index.html">home<a>
              </div>
              <div class="">
                <form id="myForm" onsubmit="return false" method="post">
                  <div class="mb-3">
                    <label>First Name</label>
                    <input type="text" class="form-control" id="fname" placeholder="first name">
                  </div>
                  <div class="mb-3">
                    <label>Last Name</label>
                    <input type="text" class="form-control" id="lname" placeholder="last name">
                  </div>
                  <div class="mb-3">
                    <label>Email</label>
                    <input type="email" class="form-control" id="email" placeholder="email">
                  </div>
                  <div class="mb-3">
                    <label>Password</label>
                    <input type="password" class="form-control" id="password" placeholder="password">
                  </div>
                  <div class="mb-3">
                    <input type="checkbox" class="form-check-input" id="checkbox" value="I agree to the Terms of Use">
                    <label>I agree to the Terms of Use</label>
                  </div>
                  <div class="mb-3">
                    <input type="submit" class="btn btn-primary btn-sm" value="SignUp">
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>`;

let signUpId = document.querySelector("body");
signUpId.innerHTML = signUpHtmlTags;
let selectHead = document.querySelector("head");
selectHead.innerHTML = headTags;
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", saveDataToStorage);

function passwordHash(string) {
  let inputPwd = [...string];
  let convertPwd = [];
  for (let i = 0; i < inputPwd.length; i++) {
    convertPwd[i] = inputPwd[i].charCodeAt() + (i + 1);
  }
  let outputPwd = [];
  for (let j = 0; j < convertPwd.length; j++) {
    outputPwd[j] = String.fromCharCode(convertPwd[j]);
  }
  return outputPwd.join("");
}

function saveDataToStorage(e) {
  e.preventDefault();
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var passWord = document.getElementById("password").value;
  var checkbox = document.getElementById("checkbox");
  function formValidation() {
    let fieldEmty = true;
    document.getElementById("error").innerHTML = "";
    if (fname === "") {
      document.getElementById("error").innerHTML +=
        "* first name is Missing</br>";
      fieldEmty = false;
    }
    if (lname === "") {
      document.getElementById("error").innerHTML +=
        "* last name is Missing</br>";
      fieldEmty = false;
    }
    if (email === "") {
      document.getElementById("error").innerHTML += "* email is Missing</br>";
      fieldEmty = false;
    }
    if (passWord === "") {
      document.getElementById("error").innerHTML +=
        "* password is Missing</br>";
      fieldEmty = false;
    }
    if (checkbox.checked === false) {
      document.getElementById("error").innerHTML +=
        "* Terms of use not accepted.";
      fieldEmty = false;
    }
    return fieldEmty;
  }
  if (formValidation() === true) {
    let password = passwordHash(passWord);
    var newData = { fname, lname, email, password };

    let emtyArr = [];
    if (localStorage.getItem("user") === null) {
      let emtyArrStr = JSON.stringify(emtyArr);
      localStorage.setItem("user", emtyArrStr);
    }
    let oldData = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < oldData.length; i += 1) {
      if (oldData[i].email === email) {
        alert("user is already registered");
        return;
      }
    }
    oldData.push(newData);
    let oldDataStr = JSON.stringify(oldData);
    localStorage.setItem("user", oldDataStr);
    location.replace("log_in.html");
  } else {
    document.getElementById("error").innerText;
  }
}
