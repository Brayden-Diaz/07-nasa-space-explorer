// filepath: /nasa-apod-gallery/nasa-apod-gallery/src/js/modal.js

// This function opens the modal and populates it with the selected image data
export const openModal = (imageData) => {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const modalExplanation = document.getElementById('modalExplanation');

    // Set the image source and text content for the modal
    modalImage.src = imageData.url;
    modalTitle.textContent = imageData.title;
    modalDate.textContent = imageData.date;
    modalExplanation.textContent = imageData.explanation;

    // Display the modal
    modal.style.display = 'block';
};

// This function closes the modal
export const closeModal = () => {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
};

// This function sets up the event listeners for closing the modal
export const setupModalListeners = () => {
    const closeButton = document.getElementById('closeModal');
    
    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', closeModal);
    
    // Close the modal when clicking outside of the modal content
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('imageModal');
        if (event.target === modal) {
            closeModal();
        }
    });
};