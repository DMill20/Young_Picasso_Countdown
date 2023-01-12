function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function particleInit() {
    var generator = document.getElementById("particleGenerator");
    var particleCount = 200;
    for (var i = 0; i < particleCount; i++) {
      var size = getRandomInt(2, 6);
      var n =
        '<div class="particle" style="top:' +
        getRandomInt(15, 95) +
        "%; left:" +
        getRandomInt(5, 95) +
        "%; width:" +
        size +
        "px; height:" +
        size +
        "px; animation-delay:" +
        getRandomInt(0, 30) / 10 +
        "s; background-color:rgba(" +
        getRandomInt(80, 160) +
        "," +
        getRandomInt(185, 255) +
        "," +
        getRandomInt(160, 255) +
        "," +
        getRandomInt(2, 8) / 10 +
        ');"></div>';
      console.log("Particle " + i + ": " + n);
      var node = document.createElement("div");
      node.innerHTML = n;
      generator.appendChild(node);
    }
  }
  
  particleInit();
 

var countDownDate = new Date("June 11, 2023 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
 
