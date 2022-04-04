const buttonVideo = document.querySelector('.seeFeetures');
const presentationVideo = document.querySelector('.airpodsVideo');
const closeVideo = document.querySelector('.close');

buttonVideo.addEventListener('click', function() {
    presentationVideo.style.display = 'block';
});

closeVideo.addEventListener('click', function() {
    presentationVideo.style.display = 'none';
});


