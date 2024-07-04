document.getElementById('playSongButton').addEventListener('click', function() {
    var song = document.getElementById('song');
    song.play();
});
document.getElementById('navigateButton').addEventListener('click', function() {
    window.location.href = 'fireworks.html';
});