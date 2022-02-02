let headTags = `<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>My Ist Project</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/styles.css">`;

let indexHtmlTags = `<div class="container">
      <div class="row">
        <div class="col-12"><h1>My Ist Project</h1></div>
        <div class="col-12"></div>
        <div class="col-12"></div>
        <div class="col-12">
          <p><h3>This Is My Ist Java Script Project</h3><p/>
        </div>
        <div class="col-12" style="text-align:center">
          <a href="log_in.html"><button type="button" class="btn btn-primary btn-lg">Login</button></a>
          <a href="sign_up.html"><button type="button" class="btn btn-primary btn-lg">Signup</button></a>
        </div>
      </div>
    </div>`;

let selhead = document.querySelector("head");
selhead.innerHTML = headTags;
let selIndex = document.querySelector("body");
selIndex.innerHTML = indexHtmlTags;
