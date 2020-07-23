const videoBlock= document.getElementById("jsVideoBlock");
const videoBlockPlayer = document.querySelectorAll("#jsVideoBlock video");

function handleAutoPlay(event) {
    event.target.play();
    setInterval(() => event.target.currentTime = 35, 5000);
  }

function handleAutoEnd(event) {
    event.target.pause();
    event.target.currentTime = 35;
  }

function init(){
    videoBlockPlayer.forEach(function(player){
      player.volume = 0;
      player.currentTime = 35;
      player.addEventListener("mouseover", handleAutoPlay);
      player.addEventListener("mouseout", handleAutoEnd);
    });
}

if (videoBlock) {
    init();
}