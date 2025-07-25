// filepath: /nasa-apod-gallery/nasa-apod-gallery/src/js/api.js

// This function fetches data from NASA's APOD API based on the selected date range
window.fetchAPODData = async (startDate, endDate) => {
    const API_KEY = 'cxVrXBP4z8XG7u7mxiwnJigLfXrBHSd9TxMlo2pk';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;

    try {
        // Show loading message while fetching data
        // document.getElementById('loadingMessage').style.display = 'block';

        // Fetch data from the API
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON response
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return [];
    } finally {
        // Hide loading message after fetching data
        // document.getElementById('loadingMessage').style.display = 'none';
    }
};