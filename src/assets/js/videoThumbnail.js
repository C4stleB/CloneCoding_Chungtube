const videoBlock= document.getElementById("jsVideoBlock");
const videoBlockPlayer = document.querySelectorAll("#jsVideoBlock video");

function handleAutoPlay(event) {
    event.target.play();
    setInterval(() => event.target.currentTime = 60, 5000);
  }

function handleAutoEnd(event) {
    event.target.pause();
    event.target.currentTime = 60;
  }

function init(){
    videoBlockPlayer.forEach(function(player){
      player.volume = 0;
      player.currentTime = 60;
      player.addEventListener("mouseover", handleAutoPlay);
      player.addEventListener("mouseout", handleAutoEnd);
    });
}

if (videoBlock) {
    init();
}