const videoBlock= document.getElementById("jsVideoBlock");
const videoBlockPlayer = document.querySelectorAll("#jsVideoBlock video");

function handleAutoPlay(event) {
    event.target.play();
    setInterval(event.target.currentTime = 30, 5000);
  }

function handleAutoEnd(event) {
    event.target.pause();
    event.target.currentTime = 30;
  }

function init(){
    videoBlockPlayer.forEach(function(player){
      player.volume = 0;
      player.currentTime = 3000;
      player.addEventListener("mouseover", handleAutoPlay);
      player.addEventListener("mouseout", handleAutoEnd);
    });
}

if (videoBlock) {
    init();
}