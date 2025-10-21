document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.getElementById('play-audio-button');
  const audioElement = document.getElementById('crowd-cheers-sound-310542');

  // Check if elements exist
  if (!playButton || !audioElement) {
    console.error('Error: Could not find button or audio element. Button:', !!playButton, 'Audio:', !!audioElement);
    return;
  }

  // Handle button click to play audio
  playButton.addEventListener('click', function() {
    audioElement.currentTime = 0; // Reset to start
    audioElement.play()
      .then(() => {
        console.log('Audio playback started: crowd-cheers-sound-310542.mp3');
      })
      .catch(error => {
        console.error('Audio play failed:', error);
        alert('Failed to play audio. Please check if the audio file is available or try a different browser.');
      });
  });
});