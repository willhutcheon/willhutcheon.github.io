const gallery = document.querySelectorAll('img');

gallery.forEach(image => {
    image.addEventListener('click', expand);
});

function expand(event) {
    const clickedImage = event.currentTarget;
    gallery.forEach(image => {
        if (image !== clickedImage) {
            image.classList.remove('big');
            image.classList.add('small');
        }
    });
    clickedImage.classList.remove('small');
    clickedImage.classList.add('big');
}







/* const gallery = document.querySelectorAll('img');

gallery.forEach(image => {
    image.addEventListener('click', function() {
        const clickedImage = this;
        const dishDescription = document.getElementById('dishDescription');
        const dishDescriptionText = document.getElementById('dishDescriptionText');
        const dishCost = document.getElementById('dishCost');

        // Define dish descriptions and costs based on the clicked image
        const descriptions = {
            'chickfila0': {
                description: "The Chick-fil-a Chicken Sandwich combo comes with a classic chicken sandwich served with pickles on a toasted butter bun.",
                cost: "$5.99",
            },
            'chickfila1': {
                description: "Chick-fil-a Nuggets combo includes bite-sized pieces of chicken breast seasoned to perfection.",
                cost: "$6.49",
            },
            'chickfila2': {
                description: "The Peppermint Milkshake is a seasonal favorite made with creamy vanilla ice cream blended with peppermint syrup and topped with whipped cream and a maraschino cherry.",
                cost: "$3.99",
            },
            // Add more descriptions for other images as needed
        };

        // Get the id of the parent div containing the clicked image
        const parentId = clickedImage.parentElement.id;

        // Check if the clicked image has a corresponding description
        if (descriptions.hasOwnProperty(parentId)) {
            const { description, cost } = descriptions[parentId];
            // Update the text content of the dish description and cost elements
            dishDescriptionText.textContent = description;
            dishCost.textContent = `Cost: ${cost}`;

            // Show the dish description section
            dishDescription.style.display = 'block';
        }
    });
});
 */