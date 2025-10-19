
//this is for the video on the cover letter ~ line 65 
document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('play-audio-button');
  const video = document.getElementById('background-video');
  const audio = document.getElementById('applause-audio');
  
  if (playButton && video && audio) {
    playButton.addEventListener('click', function() {
      // Play video first, then audio after user interaction
      video.play().then(() => {
        // Small delay to ensure video starts
        setTimeout(() => {
          audio.currentTime = video.currentTime;
          audio.play().then(() => {
            console.log('Audio playing successfully');
          }).catch(e => {
            console.log('Audio play failed:', e);
            // Try unmuting audio
            audio.muted = false;
            audio.play().catch(e2 => console.log('Still failed:', e2));
          });
        }, 100);
      }).catch(e => {
        console.log('Video play failed:', e);
      });
    });
  }
});

            