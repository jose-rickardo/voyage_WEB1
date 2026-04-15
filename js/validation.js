function reservation() {
  const destination = document.getElementById("check_destination");
  const date = document.getElementById("check_date");
  const dateValid = document.getElementById("check_date_2");
  const email = document.getElementById("check_email");
  const contentCheck1 = document.getElementById("check_1");
  const contentCheck2 = document.getElementById("check_2");
  const contentCheck3 = document.getElementById("check_3");
  const contentCheck4 = document.getElementById("check_4");
  const valid = document.getElementById("make_reservation_valided");
  if (destination.value == "") {
    contentCheck1.style.border = "4px solid red";
    setTimeout(function () {
      contentCheck1.style.border = "0px solid red";
    }, 2000);
    reservation();
  } else if (date.value == "") {
    contentCheck2.style.border = "4px solid red";
    setTimeout(function () {
      contentCheck2.style.border = "0px solid red";
    }, 2000);
    reservation();
  } else if (dateValid.value == "") {
    contentCheck3.style.border = "4px solid red";
    setTimeout(function () {
      contentCheck3.style.border = "0px solid red";
    }, 2000);
    reservation();
  } else if (email.value == "") {
    contentCheck4.style.border = "4px solid red";
    setTimeout(function () {
      contentCheck4.style.border = "0px solid red";
    }, 2000);
    reservation();
  } else {
    make_reservation_valided.style.opacity = "1";
    setTimeout(function () {
      make_reservation_valided.style.opacity = "0";
    }, 2000);
  }
}

//pour le send a la fin
const sent = document.getElementById("finale_page_send");
const message = document.getElementById("message");
const senduton = document.getElementById("finale_page_send_button");
const ContentFinalPageInput = document.querySelector(".finale_page_send");
function envoyer() {
  if (message.value == "") {
    ContentFinalPageInput.style.border = "2px solid red";
    setTimeout(function () {
      ContentFinalPageInput.style.border = "0px solid red";
    }, 2000);
  } else {
    sent.style.opacity = "1";
    document.getElementById("message").value = "";
    setTimeout(function () {
    sent.style.opacity = "0";
    }, 2000);
  }
}
