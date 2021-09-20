//Make sounds with click - add event listener to all button with loops
var buttonClicked = document.querySelectorAll("button").length;
for (var i = 0; i < buttonClicked; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    buttonSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  })
}

// Make sounds with keyboard
document.addEventListener("keydown", function(event) {
  buttonSound(event.key);
  buttonAnimation(event.key);
})

function buttonSound(triggerEvent) {
  switch (triggerEvent) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:

  }
}

//Make animation
function buttonAnimation(currentButton) {
  var activeButton = document.querySelector("." + currentButton); //pick that element
  activeButton.classList.add("pressed");
  setTimeout(function() {activeButton.classList.remove("pressed")}, 150);
}
