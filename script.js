const videos = document.querySelectorAll(".placeholder video");

let currentVideo = null;

videos.forEach(video => {

  video.addEventListener("click", () => {

    // If another video is playing → stop it
    if (currentVideo && currentVideo !== video) {
      currentVideo.pause();
      currentVideo.currentTime = 0;
      currentVideo.muted = true; // reset sound
    }

    // If clicked video is already playing → pause it
    if (!video.paused) {
      video.pause();
      video.currentTime = 0;
      video.muted = true;
      currentVideo = null;
      return;
    }

    // Play new video with sound
    video.muted = false;
    video.play();
    currentVideo = video;
  });

});
