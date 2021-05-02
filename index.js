let year = new Date().getFullYear();
document.getElementById("year").innerHTML = "Thops Gaming" + " " + year;


var drumNumber = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < drumNumber ; i++){
  var doc = document.querySelectorAll(".drum")[i].addEventListener("click",function(){

var btnHTML = this.innerHTML;

makesound(btnHTML);
eff(btnHTML);



  });
}


document.addEventListener("keydown", function(event){
  makesound(event.key);
  eff(event.key);
});

function makesound(key) {

  switch (key) {
            case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

            case "a":
             var audio = new Audio("sounds/kick-bass.mp3");
              audio.play();
            break;

            case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

            case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

            case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

            case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;



    default:

    }

}


function eff(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
