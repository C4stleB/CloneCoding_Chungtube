const videoBlock= document.getElementById("jsVideoBlock");
const videoBlockPlayer = document.querySelector("#jsVideoBlock video");

function handleAutoPlay(event) {
    event.target.play();
  }

function handleAutoEnd(event) {
    event.target.pause();
    event.target.currentTime = 0;
  }

function init(){
    videoBlockPlayer.volume = 0;
    videoBlockPlayer.addEventListener("mouseover", handleAutoPlay);
    videoBlockPlayer.addEventListener("mouseout", handleAutoEnd);
}

if (videoBlock) {
    init();
}