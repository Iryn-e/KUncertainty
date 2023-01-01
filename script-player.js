
var playerTrack = document.getElementById("player-track"),
  albumArt = document.getElementById("album-art"),
  playPauseButton = document.getElementById("play-pause-button");


function playPause() {
  setTimeout(function () {
    if (audio.paused) {
      playerTrack.classList.add("active");
      albumArt.classList.add("active");
      audio.play();
    } else {
      playerTrack.classList.remove("active");
      albumArt.classList.remove("active");
      albumArt.classList.remove("buffering");
      audio.pause();
    }
  }, 300);
}

function selectTrack(flag) {
  playPauseButton.addEventListener('mouseup', playPause);

  if (flag != 0) {
    audio.play();
    playerTrack.addClass("active");
    albumArt.addClass("active");
  }
}


initPlayer();