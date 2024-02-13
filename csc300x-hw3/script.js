document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelectorAll('img');

    gallery.forEach(image => {
        image.addEventListener('click', expand);
    });

    function expand(event) {
        const clickedImage = event.currentTarget;

        // Reset all images to small size
        gallery.forEach(image => {
            image.classList.remove('big');
            image.classList.add('small');
        });

        // Expand the clicked image
        clickedImage.classList.remove('small');
        clickedImage.classList.add('big');

        // Hide all dish descriptions
        const dishDescriptions = document.querySelectorAll('.dish-description');
        dishDescriptions.forEach(description => {
            description.style.display = 'none';
        });

        // Show the dish description corresponding to the clicked image
        const dishDescription = clickedImage.parentNode.querySelector('.dish-description');
        dishDescription.style.display = 'block';
    }
});
