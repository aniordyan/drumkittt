document.addEventListener('keydown', function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


var numofDrums = document.querySelectorAll("button").length;

for (i = 0; i < numofDrums; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {

    var buttonHTML = this.innerHTML;

    makeSound(buttonHTML);

    buttonAnimation(buttonHTML);
    // var audio = new Audio("sounds/crash.mp3");
    // audio.play();
  });
}

function buttonAnimation(currentkey) {

  var buttonActive = document.querySelector("." + currentkey);

  buttonActive.classList.add("pressed");

  setTimeout(function() { buttonActive.classList.remove("pressed"); }, 100);

}


function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
      case"s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();

      case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      
      case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
    default:
      console.log("Error " + key + " Not a sound");
  }
}
