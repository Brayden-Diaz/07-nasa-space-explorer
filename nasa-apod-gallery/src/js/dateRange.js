// filepath: /nasa-apod-gallery/nasa-apod-gallery/src/js/dateRange.js

// This function initializes the date picker inputs for selecting a date range
export const setupDateInputs = (startInput, endInput) => {
    // Set default start date to 9 days ago
    const today = new Date();
    const nineDaysAgo = new Date(today);
    nineDaysAgo.setDate(today.getDate() - 9);

    // Format dates to YYYY-MM-DD for the input fields
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // Set the value of the date inputs
    startInput.value = formatDate(nineDaysAgo);
    endInput.value = formatDate(today);

    // Set the min attribute for the start date input
    startInput.setAttribute('min', '1995-06-16'); // NASA's APOD archive starts from this date
    endInput.setAttribute('max', formatDate(today)); // Today's date as the max for end date

    // Add event listeners to update the end date when the start date changes
    startInput.addEventListener('change', () => {
        const startDate = new Date(startInput.value);
        endInput.setAttribute('min', formatDate(startDate)); // Update min for end date
    });
};