const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navbar = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-links li");

  let elementsArray = document.querySelectorAll(".nav-links li, .burger");

  elementsArray.forEach(function (elem) {
    elem.addEventListener("click", function () {
      //toggle navbar
      nav.classList.toggle("nav-active");
      //toggle-blur
      navbar.classList.toggle("no-blur"); 
      //animate links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `navLinkFade 0.2s ease forwards ${
            index / 10 + 0.1
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

  // Changing Text Animation
  var type = new Typed(".changing", {
    strings: [
      "Music",
      "Drama",
      "Dance",
      "Recitation",
      "Talent Hunt",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  // Countdown
  var finalDate = new Date("Jul 10, 2021 16:00:00").getTime();
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
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("daytext").innerHTML = 0 + "<br>DAYS";
      document.getElementById("hourtext").innerHTML = 0 + "<br>HOURS";
      document.getElementById("minstext").innerHTML = 0 + "<br>MINS";
      document.getElementById("secstext").innerHTML = 0 + "<br>SECS";
    }
  }, 1000);

  $(".owl1").owlCarousel({
    items: 3,
    loop: true,
    nav: false,
    margin: 22,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: true,
      },
    },
  });

  $(".owl2").owlCarousel({
    items: 3,
    loop: true,
    margin: 22,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
        loop: true,
      },
    },
  });
  const openmfButtons = document.querySelectorAll('[data-mf-target]')
const closemfButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openmfButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mf = document.querySelector(button.dataset.mfTarget)
    openmf(mf)
  })
})

overlay.addEventListener('click', () => {
  const mfs = document.querySelectorAll('.mf.active')
  mfs.forEach(mf => {
    closemf(mf)
  })
})

closemfButtons.forEach(button => {
  button.addEventListener('click', () => {
    const mf = button.closest('.mf')
    closemf(mf)
  })
})

function openmf(mf) {
  if (mf == null) return
  mf.classList.add('active')
  overlay.classList.add('active')
}

function closemf(mf) {
  if (mf == null) return
  mf.classList.remove('active')
  overlay.classList.remove('active')
}
});
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#f71414", "#FCBC0F", "#F85F36"];

const numBalls = 40;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 6000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
