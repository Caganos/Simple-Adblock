const observer = new MutationObserver(() => {
  let adContainer = document.querySelector(".video-ads, .ytp-ad-module");
  if (adContainer) {
    adContainer.remove(); // Remove ad containers
  }

  let video = document.querySelector("video");
  if (video && video.src.includes("adformat")) {
    video.pause();
    video.src = ""; // Stop the ad from playing
    console.log("YouTube ad blocked!");
  }
});

// Observe changes in the YouTube DOM
observer.observe(document.body, { childList: true, subtree: true });
