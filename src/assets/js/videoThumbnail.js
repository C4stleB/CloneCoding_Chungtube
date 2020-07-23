const videoThumbnail = document.getElementById("jsVideoThumbnail");
const videoPlayerThumbnail = document.querySelector("#jsVideoThumbnail video");

function handleAutoPlay(event) {
    event.target.play();
  }

function handleAutoEnd(event) {
    event.target.pause();
    event.target.currentTime = 0;
  }

function init(){
    videoPlayerThumbnail.volume = 0;
    videoThumbnail.addEventListener("mouseover", handleAutoPlay);
    videoThumbnail.addEventListener("mouseout", handleAutoEnd);
}

if (videoThumbnail) {
    init();
}