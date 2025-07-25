# NASA APOD Gallery

This project is a simple web application that connects to NASA's Astronomy Picture of the Day (APOD) API. It allows users to select a date range and fetch space images, displaying them in a gallery format. Each image can be viewed in a modal with additional details.

## Project Structure

The project consists of the following files:

- **src/index.html**: The main HTML document that sets up the structure of the web page.
- **src/js/script.js**: The entry point for the JavaScript code, handling user interactions and updating the gallery.
- **src/js/api.js**: Contains functions to connect to NASA’s APOD API and fetch data based on the selected date range.
- **src/js/gallery.js**: Responsible for generating the gallery of space images and updating the gallery section of the page.
- **src/js/modal.js**: Manages the modal view for displaying a larger version of the image along with its title, date, and explanation.
- **src/js/dateRange.js**: Sets up the date picker inputs for selecting the date range.
- **src/css/styles.css**: Contains styles for the application, including layout for the gallery, modal, and loading message.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `src/index.html` in your web browser to view the application.

## Usage Guidelines

- Select a start and end date using the date picker inputs.
- Click the "Get Space Images" button to fetch images from NASA's APOD API.
- The images will be displayed in a gallery format.
- Click on an image to view it in a modal with additional information.

## NASA APOD API

This project utilizes NASA's Astronomy Picture of the Day API to fetch images. For more information about the API, visit [NASA's API documentation](https://api.nasa.gov/). 

Enjoy exploring the wonders of space!