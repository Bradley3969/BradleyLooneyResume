document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('play-audio-button');
  const audioElement = document.getElementById('crowd-cheers-sound-310542');
  
  playButton.addEventListener('click', function() {
    audioElement.currentTime = 0;
    audioElement.play().catch(function(error) {
      console.log('Audio play failed:', error);
    });
    console.log('Audio playback initiated for enthusiasm clip.');
  });
});