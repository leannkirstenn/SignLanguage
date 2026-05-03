const videos = document.querySelectorAll(".placeholder video");

videos.forEach(video => {
  video.addEventListener("mouseenter", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
});
