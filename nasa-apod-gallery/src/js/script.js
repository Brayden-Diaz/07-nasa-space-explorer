// filepath: /nasa-apod-gallery/nasa-apod-gallery/src/js/script.js

// Select the date input elements and the button to fetch images
const startInput = document.getElementById('startDate');
const endInput = document.getElementById('endDate');
const fetchButton = document.getElementById('fetchImages');
const gallery = document.getElementById('gallery');
const loadingMessage = document.getElementById('loadingMessage');

// Function to show the loading message
const showLoading = () => {
    loadingMessage.style.display = 'block'; // Show loading message
};

// Function to hide the loading message
const hideLoading = () => {
    loadingMessage.style.display = 'none'; // Hide loading message
};

// Function to handle the fetch button click
const handleFetchImages = async () => {
    showLoading(); // Show loading message
    const startDate = startInput.value; // Get start date
    const endDate = endInput.value; // Get end date

    try {
        const data = await fetchImagesFromAPI(startDate, endDate); // Fetch images from API
        updateGallery(data); // Update the gallery with fetched data
    } catch (error) {
        console.error('Error fetching images:', error); // Log any errors
    } finally {
        hideLoading(); // Hide loading message
    }
};

// Add event listener to the fetch button
fetchButton.addEventListener('click', handleFetchImages);

// Function to update the gallery with fetched data
const updateGallery = (data) => {
    gallery.innerHTML = ''; // Clear existing gallery content
    data.forEach(item => {
        const imageElement = document.createElement('div'); // Create a new div for each image
        imageElement.innerHTML = `
            <img src="${item.url}" alt="${item.title}" />
            <h3>${item.title}</h3>
            <p>${item.date}</p>
        `;
        gallery.appendChild(imageElement); // Add the image element to the gallery
    });
};