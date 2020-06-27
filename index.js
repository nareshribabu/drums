//gets the number of drums or buttons
var numButtons = document.querySelectorAll(".drum").length;


//goes through all the buttons and grabs which button was pressed.
//That button name is then sent to the make sounds function.
for (var i = 0; i < numButtons; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

//takes in a string path to the sound that you want to play and it plays that sound
function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}

//gets which key on the keyboard has been pressed and sends it to the get sound function
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//takes in a key (a button or a keyboard key) and it plays the corresponding sound.
function makeSound(key) {

  switch (key) {
    case "w":
      playSound("sounds/crash.mp3");
      break;

    case "a":
      playSound("sounds/kick-bass.mp3");
      break;

    case "s":
      playSound("sounds/snare.mp3");
      break;

    case "d":
      playSound("sounds/tom-1.mp3");
      break;

    case "j":
      playSound("sounds/tom-2.mp3");
      break;

    case "k":
      playSound("sounds/tom-3.mp3");
      break;

    case "l":
      playSound("sounds/tom-4.mp3");
      break;

    default:
      console.log(buttonInnerHTML);

  }

}

function buttonAnimation(key) {

  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

/* This website was created for learning purposes only.
None of the sounds belong to me and are used for learning purposes.
None of the images belong to me and are used for learning purposes.*/
