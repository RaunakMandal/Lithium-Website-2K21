// Countdown
var finalDate = new Date("Jun 1, 2021").getTime();
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = finalDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("daytext").innerHTML = days + "<br>DAYS";
    document.getElementById("hourtext").innerHTML = hours + "<br>HOURS";
    document.getElementById("minstext").innerHTML = minutes + "<br>MINS";
    document.getElementById("secstext").innerHTML = seconds + "<br>SECS";
}, 1000);

// Changing Text
var typing = () => {
    var type = new Typed(".changing", {
        strings: ["Dance", "Drama", "Mr and Ms Fresher", "Singing"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
};