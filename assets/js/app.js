const buttonVideo = document.querySelector('.seeFeetures');
const presentationVideo = document.querySelector('.airpodsVideo');
const closeVideo = document.querySelector('.close');
const allPage = document.body;



buttonVideo.addEventListener('click', function() {
    presentationVideo.style.display = 'block';
    document.body.style.overflow = 'hidden';
    presentationVideo.muted = false;
});

closeVideo.addEventListener('click', function() {
    presentationVideo.style.display = 'none';
    document.body.style.overflow = 'auto';
    presentationVideo.muted = true;

});




