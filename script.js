const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", function () {

    // If video is hidden, show it and play
    if (video.style.display === "none") {
        video.style.display = "block";
        video.play();
    }
    // If video is visible
    else {

        // If paused, play it
        if (video.paused) {
            video.play();
        }

        // Hide the video
        video.style.display = "none";
    }

});