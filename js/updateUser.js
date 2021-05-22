let headTags =
    `<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>My Ist Project</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/styles.css">`;

let updateHtmlTags =
    `<div class="container">
    <div class="row">
        <div class="text" style="text-align:center">
          <h2>Update Your Account<h2>
        </div>
        <div>
          <div class="col-12" id="error" style="color:red"></div>
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
                <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="password">
              </div>
              <div class="mb-3">
                <input type="submit" class="btn btn-primary btn-sm" value="Update">
                <input type="submit" class="btn btn-primary btn-sm" onclick = "cencelUpdate()" value="cancel">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>`;

  let selUpdateForm = document.querySelector("body");
      selUpdateForm.innerHTML = updateHtmlTags;
  let selHead = document.querySelector("head");
      selHead.innerHTML = headTags;
var getLoggedUser = JSON.parse(localStorage.getItem("loggedUser"));
var userDetails = JSON.parse(localStorage.getItem("user"));
if(getLoggedUser === null){
  location.replace("index.html");
}
const myForm = document.getElementById("myForm");
myForm.addEventListener("submit",formUpdation);
insertData();

 function insertData(){
   let fname = document.getElementById("fname");
   let lname = document.getElementById("lname");
   let password = document.getElementById("password");
   for (let i=0; i<userDetails.length; i++){
     if(getLoggedUser.email === userDetails[i].email){
      fname.value = userDetails[i].fname;
      lname.value = userDetails[i].lname;
      password.value = convertHash(userDetails[i].password);
     }
   }
 }
 function cencelUpdate(){
       myForm.reset();
   location.replace("mydetails.html");
 }

function formUpdation(event){
  event.preventDefault();
  var inputFname = document.getElementById("fname").value;
  var inputLname = document.getElementById("lname").value;
  var inputPassword = document.getElementById("password").value;
  let userUpdateDetails = JSON.parse(localStorage.getItem("user"));
 let arrayUpdate = [];
 for(let i=0; i<userUpdateDetails.length; i++){

   if(userUpdateDetails[i].email === getLoggedUser.email){
     if(inputFname ==="" || inputLname ==="" || inputPassword === "")return;
       userUpdateDetails[i].fname = inputFname;
       userUpdateDetails[i].lname = inputLname;
       userUpdateDetails[i].password = passwordHash(inputPassword);

   }

   arrayUpdate.push(userUpdateDetails[i]);

 }
 localStorage.setItem("user",JSON.stringify(arrayUpdate));
 location.replace("mydetails.html");
}
function passwordHash(string){
  let inputPwd = [...string];
  let convertPwd = [];
    for(let i=0; i<inputPwd.length; i++){
       convertPwd[i] = inputPwd[i].charCodeAt() + (i+1);
    }
  let outputPwd = [];
  for(let j=0; j<convertPwd.length; j++){
    outputPwd[j] = String.fromCharCode(convertPwd[j]);
  }
    return outputPwd.join("");
}


function convertHash(string){
  let inputPwd = [...string];
  let convertPwd = [];
    for(let i=0; i<inputPwd.length; i++){
       convertPwd[i] = inputPwd[i].charCodeAt() - (i+1);
    }
  let outputPwd = [];
  for(let j=0; j<convertPwd.length; j++){
    outputPwd[j] = String.fromCharCode(convertPwd[j]);
  }
    return outputPwd.join("");
}
