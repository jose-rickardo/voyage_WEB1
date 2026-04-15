function validEmailAndPassword() {
  const email = document.getElementById("email-input").value;
  const password = document.getElementById("password-input").value;
  const eror = document.getElementById("eror");
  const bouton = document.getElementById("bouton");

  if (email.trim() == "" || password.trim() == "") {
    bouton.innerHTML = "loading...";
    setTimeout(function () {
      eror.style.opacity = "1";
      setTimeout(function () {
        eror.style.opacity = "0";
      }, 3000);
    }, 3000);
    setTimeout(function(){
      bouton.innerHTML = "Login Now";
    }, 3000)
  }
  if (email.trim() !== "ricardo@gmail.com" || password.trim() !== "1234") {
    bouton.innerHTML = "loading...";
    setTimeout(function () {
      eror.style.opacity = "1";
      setTimeout(function () {
        eror.style.opacity = "0";
      }, 3000);
    }, 3000);
    setTimeout(function () {
      bouton.innerHTML = "Login Now";
    }, 3000);
  } else {
    bouton.innerHTML = "loading...";
    setTimeout(function () {
      location.href = "./page.html";
      eror.style.opacity = "0";
    }, 2000);
  }
}
