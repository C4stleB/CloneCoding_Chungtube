const videoBlock= document.getElementById("jsVideoBlock");
const videoBlockPlayer = document.querySelectorAll("#jsVideoBlock video");

function handleAutoPlay(event) {
    event.target.play();
  }

function handleAutoEnd(event) {
    event.target.pause();
    event.target.currentTime = 0;
  }

function init(){
    videoBlockPlayer.forEach(function(player){
      player.volume = 0;
      player.addEventListener("mouseover", handleAutoPlay);
      player.addEventListener("mouseout", handleAutoEnd);
    })
}

if (videoBlock) {
    init();
}