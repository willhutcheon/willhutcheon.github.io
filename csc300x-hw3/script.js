const gallery = document.querySelectorAll('img');

gallery.forEach(image => {
    image.addEventListener('click', expand);
});

function expand(event) {
    const clickedImage = event.currentTarget;
    gallery.forEach(image => {
        image.classList.remove('big');
        image.classList.add('small');
    });
    clickedImage.classList.remove('small');
    clickedImage.classList.add('big');
}
