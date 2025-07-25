// filepath: /nasa-apod-gallery/nasa-apod-gallery/src/js/gallery.js

// This function generates a gallery of space images
// It takes the fetched data as an argument
const createGallery = (data) => {
    // Find the gallery container in the HTML
    const galleryContainer = document.getElementById('gallery');
    
    // Clear any existing content in the gallery
    galleryContainer.innerHTML = '';

    // Loop through each item in the fetched data
    data.forEach(item => {
        // Create a div for each image
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('image-item');

        // Create an image element
        const imageElement = document.createElement('img');
        imageElement.src = item.url; // Set the image source
        imageElement.alt = item.title; // Set the alt text for accessibility

        // Create a title element
        const titleElement = document.createElement('h3');
        titleElement.textContent = item.title; // Set the title text

        // Create a date element
        const dateElement = document.createElement('p');
        dateElement.textContent = item.date; // Set the date text

        // Append the image and text elements to the image div
        imageDiv.appendChild(imageElement);
        imageDiv.appendChild(titleElement);
        imageDiv.appendChild(dateElement);

        // Append the image div to the gallery container
        galleryContainer.appendChild(imageDiv);
    });
};

window.displayImages = function(data) {
    // Check if the data is an array and has items
    if (Array.isArray(data) && data.length > 0) {
        createGallery(data); // Call the function to create the gallery
    } else {
        const galleryContainer = document.getElementById('gallery');
        galleryContainer.innerHTML = '<p>No images found for the selected date range.</p>'; // Display a message if no images are found
    }
}