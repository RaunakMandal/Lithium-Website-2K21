const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  let elementsArray = document.querySelectorAll(".nav-links li, .burger");

  elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
      //toggle navbar
      nav.classList.toggle("nav-active");

      //animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.2s ease forwards ${
            index / 7 + 0.3
          }s`;
        }
      });
      //burger animation
      burger.classList.toggle("toggle");
    });
  });
};

$(document).ready(function () {
  navSlide();

  $(".slider").slick({
    centerMode: true,
    slidesToWhow: 3,
  });

  // Changing Text Animation
  var type = new Typed(".changing", {
    strings: [
      "Music",
      "Drama",
      "Dance",
      "Recitation",
      "Talent Hunt",
      "Mr and Miss Freshers",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // Countdown
  var finalDate = new Date("Jun 20, 2021").getTime();
  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = finalDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("daytext").innerHTML = days + "<br>DAYS";
    document.getElementById("hourtext").innerHTML = hours + "<br>HOURS";
    document.getElementById("minstext").innerHTML = minutes + "<br>MINS";
    document.getElementById("secstext").innerHTML = seconds + "<br>SECS";
  }, 1000);

  $.getJSON("team.json", (json) => {
    console.log(json);
    var doc = document.getElementsByClassName("slider");
    doc[0].innerHTML = "";

    for (let i = 0; i < json.length; i++) {
      doc[0].innerHTML += `<div class="item"><div class="item-inner"><img src='assets/${json[i].img}'><h4>${json[i].name}</h4><p>${json[i].team}</p><div class="social"><a href="${json[i].social}"><button type="button" class="btn btn-primary">Connect</button></a></div></div></div>`;
    }
  });
});
