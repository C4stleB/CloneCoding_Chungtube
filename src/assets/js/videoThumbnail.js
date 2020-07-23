const videoThumbnail = document.getElementById("jsVideoThumbnail");

function handleAutoPlay() {
    videoThumbnail.play();
  }

function handleAutoEnd() {
    videoThumbnail.currentTime = 0;
  }

function init(){
    videoThumbnail.addEventListener("mouseover", handleAutoPlay);
    videoThumbnail.addEventListener("mouseout", handleAutoEnd);
}

if (videoThumbnail) {
    init();
}